import { mockupContatoImg } from "../img/Imports";
import {
    MockUp, 
    EntreEmContato, 
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
            <EntreEmContato />
        </>
    );
}

export default Contato;