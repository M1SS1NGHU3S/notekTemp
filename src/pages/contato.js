import { mockupContatoImg } from "../img/Imports";
import {
    MockUp, 
    ContatoSocial
} from "../sections/Imports";

function Contato() {
    return (
        <>
            <MockUp
                title="Entre em contato conosco!"
                button={false}
                bgImage={mockupContatoImg}
            />  
            <ContatoSocial />
        </>
    );
}

export default Contato;