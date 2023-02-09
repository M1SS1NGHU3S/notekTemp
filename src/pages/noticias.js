import { mockupNoticiasImg } from "../img/Imports"
import {
    MockUp,
    EntreEmContato
} from "../sections/Imports";

function Noticias() {
    return (
        <>
            <MockUp
                title="Saiba muito mais sobre a empresa e o mundo contábil!"
                button={true}
                buttonLink="#"
                buttonText="Leia Mais"
                bgImage={mockupNoticiasImg}
            /> 
            <EntreEmContato />   
        </>
    );
}

export default Noticias;