import Button from "react-bootstrap/Button";
import "./MockUp.css";

function MockUp(props) {
    const bgStyle = {backgroundImage: `linear-gradient(90.18deg, #E4EBEE 0.08%, rgba(217, 217, 217, 0) 99.77%), url(${props.bgImage})`};
    const fontStyle = props.text && {fontWeight: "500"};

    return (
        <div className="mockup" style={bgStyle}>
            <div className="mockup--container">
                <h1 className="mockup--title" style={fontStyle}>{props.title}</h1>
                {props.text && <h3 className="mockup--text">{props.text}</h3>}
                {props.button && <Button href={props.buttonLink} className="blue-btn" variant="info">{props.buttonText}</Button>}
            </div>
            
        </div>
    );
}

export default MockUp;