import sobreImg from "../img/mockup-sobre.png"
import MockUp from "../components/MockUp";

function Sobre() {
    return (
            <MockUp
                title="Sobre Nós"
                text="Agora somos Notek Assessoria Empresarial!"
                button={false}
                bgImage={sobreImg}
            />     
    );
}

export default Sobre;