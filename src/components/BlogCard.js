import "./BlogCard.css";

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

export default BlogCard;