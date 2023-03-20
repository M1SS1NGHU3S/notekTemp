import "./BlogCard.css";

function BlogCard(props) {
    const isBlogContentStyle = {
        height: "auto"
    };
    const isBlogImgStyle = {
        width: "inherit",
        height: "200px",
        objectFit: "cover",
        borderRadius: "20px 20px 0 0",
    };
    const isBlogCardStyle = {
        marginBlock: "30px"
    };

    return (
        <div className={`blog-card noticias-row--column ${props.isBlog && "blog-card--recentes"}`} style={props.isBlog && isBlogCardStyle}>
            <img className="blog-card--img"  style={props.isBlog && isBlogImgStyle} src={props.img} alt={props.alt} />
            <div className="blog-card--content card-content" style={props.isBlog && isBlogContentStyle}>
                <a href="/" className="blog-card--link">
                    <h3 className="blog-card--title">{props.titulo}</h3>
                </a>
                <p className="blog-card--desc">{props.desc}</p>
            </div>
        </div>
    );
}

export default BlogCard;