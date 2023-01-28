import sobreImg from "../img/mockup-sobre.png"
import MockUp from "../components/MockUp";
import SobreMudanca from "../sections/SobreMudanca";
import SobreRegiao from "../sections/SobreRegiao";

function Sobre() {
    return (
            <div>
                <MockUp
                title="Sobre Nós"
                text="Agora somos Notek Assessoria Empresarial!"
                button={false}
                bgImage={sobreImg}
                />     
                <SobreMudanca isHome={false} />
                <SobreRegiao />
            </div>
            
    );
}

export default Sobre;