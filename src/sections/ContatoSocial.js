import "./ContatoSocial.css";
import {contato} from "../sections-data/Imports";

function ContatoSocial() {
    const generateContatoInfo = contato.contatoInfoContent.map((value, index) =>
        <ContatoInfo 
            key={index}
            image={value.image} 
            text={value.text}
            alt={value.alt}
        />
    )

    return (
        <section className="contato-social">
            <div className="contato-social--container container">
                <div className="contato-social--column contato-social--column1">
                    <div className="contato-social--row blue-border">
                        {generateContatoInfo[0]}
                    </div>
                    <div className="contato-social--row blue-border">
                        {generateContatoInfo[1]}
                    </div>
                </div>
                <div className="contato-social--column contato-social--column2 blue-border">
                    {generateContatoInfo.slice(2)}
                </div>
            </div>
        </section>
    );
}

function ContatoInfo(props) {
    return (
        <a className="contato-info" href="/">
            <img 
                src={props.image} 
                alt={props.alt} 
                className="contato-info--icon" 
            /> 
            <h3 className="contato-info--text">
                {props.text}
            </h3>
        </a>
    );
}

export default ContatoSocial;