import "./NoticiaLink.css";

function NoticiaLink(props) {
    return (
        <div className="noticias-link">
            <a href={props.link} className="noticias-link--a">
                <p className="noticias-link--date">{props.data}</p>
                <h3 className="noticias-link--title">{props.titulo}</h3>
            </a>
        </div>
    );
}

export default NoticiaLink;