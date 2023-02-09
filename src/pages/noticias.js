import { mockupNoticiasImg } from "../img/Imports"
import {
    MockUp,
    NoticiasRow,
    NoticiasNovidades
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
            <NoticiasRow />
            <NoticiasNovidades />  
            <NoticiasRow />
            <NoticiasRow />
        </>
    );
}

export default Noticias;