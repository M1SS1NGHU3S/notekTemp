import "./NoticiasRow.css";
import {
    NoticiaLink,
    BlogCard
} from "../components/Imports";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";

function NoticiasRow(props) {
    const generateLinks = props.noticiaList.map((value) => {
        const dateArray = value["Criado_Em"].split("-");
        return (
            <NoticiaLink 
                key={value["Id"]}
                titulo={value["Titulo"]} 
                data={dateArray[2].split("T")[0] + "/" + dateArray[1]} 
                link={value["Link"]} 
            />
        );
    });

    const generateCards = props.blogList.map((value) => 
        <BlogCard 
            key={value["Id"]}
            blogId={value["Id"]}
            img={value["Imagem_Path"]} 
            titulo={value["Titulo"]} 
            desc={value["Descricao"]} 
            altText={value["Imagem_Desc"]} 
        />
    );

    useEffect(() => {
        console.log(props.blogList);
    })

    return (
        <section className="noticias-row">
            <div className="container noticias-row--container">
                <h2 className="section-title">Notícias</h2>

                <div className="noticias-row--content">
                    {generateCards}

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