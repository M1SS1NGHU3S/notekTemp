import "./NoticiasRow.css";
import {
    linksContent,
    cardsContent
} from "./NoticiasRowContent.js"
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

function BlogCard(props) {
    return (
        <div className="blog-card noticias-row--column">
            <img className="blog-card--img" src={props.img} alt={props.alt} />
            <div className="blog-card--content card-content">
                <a href="/" className="blog-card--link">
                    <h3 className="blog-card--title">{props.titulo}</h3>
                </a>
                <p className="blog-card--desc">{props.desc}</p>
            </div>
        </div>
    );
}

function NoticiaLink(props) {
    return (
        <div className="noticias-link">
            <a href="/" className="noticias-link--a">
                <p className="noticias-link--date">{props.data}</p>
                <h3 className="noticias-link--title">{props.titulo}</h3>
            </a>
        </div>
    );
}

export default NoticiasRow;