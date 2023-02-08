import contatoImg from "../img/mockup-contato.png"
import MockUp from "../sections/MockUp.js";
import EntreEmContato from "../sections/EntreEmContato";
import ContatoSocial from "../sections/ContatoSocial";

function Contato() {
    return (
        <>
            <MockUp
                title="Entre em contato conosco!"
                button={false}
                bgImage={contatoImg}
            />  
            <ContatoSocial />
            <EntreEmContato />
        </>
    );
}

export default Contato;