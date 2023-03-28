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
            setBlogList(response.data.length > 1 ? response.data.slice(0, 2) : response.data);
        });
        Axios.get("http://localhost:3001/noticias").then((response) => {
            setNoticiaList(response.data.length > 5 ? response.data.slice(0, 5) : response.data);
        });

    }, []);

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
                blogList={blogList} 
                noticiaList={noticiaList}
            />
        </>
    );
}

export default Home;   