import "./NoticiasRow.css";
import noticiaImg1 from "../img/noticia1.png";
import noticiaImg2 from "../img/noticia2.png";

function NoticiasRow(props) {
    const linksContent = [
        {
            titulo: "Texto da Notícia",
            data: "25/01",
            link: "#"
        },
        {
            titulo: "Texto da Notícia",
            data: "25/01",
            link: "#"
        },
        {
            titulo: "Texto da Notícia",
            data: "25/01",
            link: "#"
        },
    ]
    const generateLinks = linksContent.map((value) =>
        <NoticiaLink 
            titulo={value.titulo} 
            data={value.data} 
            link={value.link} 
        />
    )
    const cardsContent = [
        {
            titulo: "Título",
            desc: "Breve resumo sobre a notícia que apareceria aqui",
            altText: "Exemplo",
            img: noticiaImg1
        },
        {
            titulo: "Título",
            desc: "Breve resumo sobre a notícia que apareceria aqui",
            altText: "Exemplo",
            img: noticiaImg2
        }
    ]
    const generateCards = cardsContent.map((value) => 
        <BlogCard 
            img={value.img} 
            titulo={value.titulo} 
            desc={value.desc} 
            altText={value.altText} 
        />
    )
    const homeStyle = props.isHome && {
        marginBlock: "100px"
    };

    return (
        <div className="noticias-row" style={homeStyle}>
            <div className="notek-container noticias-row--container">
                <h2 className="section-title">Notícias</h2>

                <div className="noticias-row--content">
                    {generateCards}

                    <div className="noticias-row--links noticias-row--column">
                        {generateLinks}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlogCard(props) {
    return (
        <div className="blog-card noticias-row--column">
            <img className="blog-card--img" src={props.img} alt={props.alt} />
            <div className="blog-card--content card-content">
                <h3 className="blog-card--title">{props.titulo}</h3>
                <p className="blog-card--desc">{props.desc}</p>
            </div>
        </div>
    );
}

function NoticiaLink(props) {
    return (
        <div className="noticias-link">
            <p className="noticias-link--date">{props.data}</p>
            <h3 className="noticias-link--title">{props.titulo}</h3>
        </div>
    );
}

export default NoticiasRow;