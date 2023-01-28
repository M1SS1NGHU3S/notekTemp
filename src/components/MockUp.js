import Button from "react-bootstrap/Button";
import "./MockUp.css";

function MockUp(props) {
    const bgStyle = {
        backgroundImage: `linear-gradient(90.18deg, #E4EBEE 0.08%, rgba(217, 217, 217, 0) 99.77%), url(${props.bgImage})`,
    };
    const mockupTitle = props.text ? <h1 className="mockup--title">{props.title}</h1> : <h2 className="mockup--title">{props.title}</h2>

    return (
        <div className="mockup" style={bgStyle}>
            <div className="mockup--container">
                {mockupTitle}
                {props.text && <h2 className="mockup--text">{props.text}</h2>}
                {props.button && <Button href={props.buttonLink} className="blue-btn mockup--btn" variant="info">{props.buttonText}</Button>}
            </div>
            
        </div>
    );
}

export default MockUp;