import noticiasImg from "../img/mockup-noticias.png"
import MockUp from "../components/MockUp";

function Noticias() {
    return (
            <MockUp
                title="Saiba muito mais sobre a empresa e o mundo contábil!"
                button={true}
                buttonLink="#"
                buttonText="Leia Mais"
                bgImage={noticiasImg}
            />    
    );
}

export default Noticias;