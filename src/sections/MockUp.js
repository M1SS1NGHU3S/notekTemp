import Button from "react-bootstrap/Button";
import "./MockUp.css";

function MockUp(props) {
    const bgStyle = {
        backgroundImage: `linear-gradient(90.18deg, #E4EBEE 10%, rgba(217, 217, 217, 0) 90%), url(${props.bgImage})`,
    };
    const mockupTitle = props.text ? <h1 className="mockup--title">{props.title}</h1> : <h2 className="mockup--title">{props.title}</h2>

    return (
        <section className="mockup" style={bgStyle}>
            <div className="mockup--container container">
                {mockupTitle}
                {props.text && <h2 className="mockup--text">{props.text}</h2>}
                {props.button && <Button href={props.buttonLink} className="blue-btn mockup--btn" variant="info">{props.buttonText}</Button>}
            </div>
            
        </section>
    );
}

export default MockUp;