import contatoImg from "../img/mockup-contato.png"
import MockUp from "../components/MockUp"

function Contato() {
    return (
            <MockUp
                title="Entre em contato conosco!"
                button={false}
                bgImage={contatoImg}
            />     
    );
}

export default Contato;