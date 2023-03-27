import { mockupNoticiasImg } from "../img/Imports";
import {useState, useEffect} from "react";
import Axios from "axios";
import {
    MockUp,
    NoticiasRow,
    NoticiasNovidades
} from "../sections/Imports";

function Noticias() {
    const [blogList, setBlogList] = useState([]);
    const [noticiaList, setNoticiaList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogList(response.data);
        });
        Axios.get("http://localhost:3001/noticias").then((response) => {
            setNoticiaList(response.data);
        });
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
                        noticiaList={remainingNoticias > 3 ? noticiaList.slice(remainingNoticias - 4, remainingNoticias) : remainingNoticias.slice(0, remainingNoticias)}
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
            {/* <NoticiasRow />
            <NoticiasNovidades />  
            <NoticiasRow />
            <NoticiasRow /> */}
            {generateNoticiasRow()}
        </>
    );
}

export default Noticias;