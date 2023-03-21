import { mockupHomeImg } from "../img/Imports";
import {useState, useEffect} from "react";
import Axios from "axios";
import {
    MockUp,
    SobreMudanca,
    ServicosHome,
    NoticiasRow,
} from "../sections/Imports"

function Home() {
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

    const partialBlogList = blogList.length > 1 ? blogList.slice(2) : blogList;
    const partialNoticiaList = noticiaList.length > 5 ? noticiaList.slice(5) : noticiaList;

    return (
        <>
            <MockUp
                title="Agora somos Notek Assessoria Empresarial!"
                button={true}
                buttonLink="/sobre"
                buttonText="Conhecer"
                bgImage={mockupHomeImg}
            />     
            <SobreMudanca isHome={true} />
            <ServicosHome />
            <NoticiasRow 
                isHome={true} 
                blogList={partialBlogList} 
                noticiaList={partialNoticiaList}
            />
        </>
    );
}

export default Home;   