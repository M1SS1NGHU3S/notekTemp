import "./ContatoSocial.css";
import {
    phoneIcon,
    pinIcon,
    whatsappIcon,
    instagramIcon,
    facebookIcon
} from "../img/Imports"

function ContatoSocial() {
    const contatoInfoContent = [
        {
            image: phoneIcon,
            text: "(11) 4828-5250",
            alt: "Phone Icon"
        },
        {
            image: pinIcon,
            text: "R. Domingos Benvenuto, 89 - Centro, Ribeirão Pires" +
                " - SP, 09400-070",
            alt: "Location Pin Icon"
        },
        {
            image: whatsappIcon,
            text: "(11) 95062-8623",
            alt: "Whatsapp Icon"
        },
        {
            image: instagramIcon,
            text: "@notekcontabilidade",
            alt: "Instagram Icon"
        },
        {
            image: facebookIcon,
            text: "fb.com/nortekcontabil.com.br",
            alt: "Facebook Icon"
        },
    ]
    const generateContatoInfo = contatoInfoContent.map((value, index) =>
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