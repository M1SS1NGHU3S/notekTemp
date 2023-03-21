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

    useEffect(() => {
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogList(response.data);
        });
    }, []);

    return (
        <>
            <MockUp
                title="Saiba muito mais sobre a empresa e o mundo contábil!"
                button={true}
                buttonLink="#"
                buttonText="Leia Mais"
                bgImage={mockupNoticiasImg}
            /> 
            <NoticiasRow />
            <NoticiasNovidades />  
            <NoticiasRow />
            <NoticiasRow />
        </>
    );
}

export default Noticias;