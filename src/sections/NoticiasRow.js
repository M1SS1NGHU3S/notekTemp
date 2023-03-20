import "./NoticiasRow.css";
import {useState, useEffect} from "react";
import Axios from "axios";
import {
    noticiasRow
} from "../sections-data/Imports"
import {
    NoticiaLink,
    BlogCard
} from "../components/Imports"
import Button from "react-bootstrap/Button";

function NoticiasRow(props) {

    const generateLinks = noticiasRow.linksContent.map((value, index) =>
        <NoticiaLink 
            key={index}
            titulo={value.titulo} 
            data={value.data} 
            link={value.link} 
        />
    )
    const generateCards = noticiasRow.cardsContent.map((value, index) => 
        <BlogCard 
            key={index}
            img={value.img} 
            titulo={value.titulo} 
            desc={value.desc} 
            altText={value.altText} 
        />
    );

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogList(response.data);
        });
    }, []);

    return (
        <section className="noticias-row">
            <div className="container noticias-row--container">
                <h2 className="section-title">Notícias</h2>

                <div className="noticias-row--content">
                    {blogList.map((value) => 
                        <BlogCard 
                            key={value["Id"]}
                            img={value["Imagem"]} 
                            titulo={value["Titulo"]} 
                            desc={value["Texto"].slice(0, 100) + "..."} 
                            altText={value["Imagem_desc"]} 
                        />
                    )}

                    <div className="noticias-row--links noticias-row--column">
                        {generateLinks}
                    </div>
                </div>
                {
                    props.isHome && 
                    <Button 
                        variant="info" 
                        href="/noticias" 
                        className="blue-btn noticias-row--btn"
                    >
                        Veja Mais
                    </Button>
                }
            </div>
        </section>
    );
}

export default NoticiasRow;