import { mockupNoticiasImg } from "../img/Imports";
import {useState, useEffect} from "react";
import {
    MockUp,
    NoticiasRow,
    NoticiasNovidades
} from "../sections/Imports";
import axios from "axios";

function Noticias() {
    const [blogList, setBlogList] = useState([]);
    const [noticiaList, setNoticiaList] = useState([]);

    useEffect(() => {
        async function getBlogs() {
            const blogsReturn = await axios({
                method: "get",
                url: "http://localhost:3001/blogs"
            });
    
            const tempBlogs = await blogsReturn.data;
            setBlogList(tempBlogs);
        }
        async function getNoticias() {
            const noticiasReturn = await axios({
                method: "get",
                url: "http://localhost:3001/noticias"
            });

            const tempNoticias = await noticiasReturn.data;
            setNoticiaList(tempNoticias);
        }

        getBlogs();
        getNoticias();
    }, []);

    
    const generateNoticiasRow = function() {
        let remainingCards = blogList.length;
        let remainingNoticias = noticiaList.length;
        const totalRows = Math.ceil((remainingCards + Math.ceil(remainingNoticias / 4)) / 3) 
        const returnHtml = []

        if (totalRows === 1) {
            returnHtml.push(
                <NoticiasRow
                    key={0}
                    blogList={blogList}
                    noticiaList={noticiaList}
                />,
                <NoticiasNovidades 
                    key={totalRows + 1}
                    lastRow={true} 
                />
            ); 
        } else {
            for (let i = 0; i < totalRows; i++) {
                if (i === Math.ceil(totalRows / 2)) {
                    returnHtml.push(
                        <NoticiasNovidades 
                            key={totalRows + 1}
                        />
                    );
                }

                returnHtml.push(
                    <NoticiasRow 
                        key={i}
                        blogList={remainingCards > 1 ? blogList.slice(remainingCards - 2, remainingCards) : blogList.slice(0, remainingCards)}
                        noticiaList={remainingNoticias > 3 ? noticiaList.slice(remainingNoticias - 4, remainingNoticias) : noticiaList.slice(0, remainingNoticias)}
                    />
                );
                remainingCards -= 2;
                remainingNoticias -= 4;
            }
        }
        
        return returnHtml;
    }

    return (
        <>
            <MockUp
                title="Saiba muito mais sobre a empresa e o mundo contábil!"
                button={true}
                buttonLink="#"
                buttonText="Leia Mais"
                bgImage={mockupNoticiasImg}
            /> 
            {generateNoticiasRow()}
        </>
    );
}

export default Noticias;