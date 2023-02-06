import contatoImg from "../img/mockup-contato.png"
import MockUp from "../components/MockUp.js";
import EntreEmContato from "../sections/EntreEmContato";

function Contato() {
    return (
        <>
            <MockUp
                title="Entre em contato conosco!"
                button={false}
                bgImage={contatoImg}
            />  
            <EntreEmContato />
        </>
    );
}

export default Contato;