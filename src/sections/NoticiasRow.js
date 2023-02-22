import "./NoticiasRow.css";
import {
    linksContent,
    cardsContent
} from "../sections-data/NoticiasRowData.js"
import {
    NoticiaLink,
    BlogCard
} from "../components/Imports"
import Button from "react-bootstrap/Button";

function NoticiasRow(props) {

    const generateLinks = linksContent.map((value, index) =>
        <NoticiaLink 
            key={index}
            titulo={value.titulo} 
            data={value.data} 
            link={value.link} 
        />
    )
    const generateCards = cardsContent.map((value, index) => 
        <BlogCard 
            key={index}
            img={value.img} 
            titulo={value.titulo} 
            desc={value.desc} 
            altText={value.altText} 
        />
    )

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