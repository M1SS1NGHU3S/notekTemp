import "./ImgBox.css"

function ImgBox(props) {
    const bgStyle = {
        height: "inherit",
        width: "inherit",
        background: `url(${props.bgImage}), ${props.bgColorStyle}`,
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <div className="img-box" style={bgStyle}>

        </div>  
    );
}

export default ImgBox;