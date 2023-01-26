import sobreImg from "../img/mockup-sobre.png"
import MockUp from "../components/MockUp";
import SobreMudanca from "../sections/SobreMudanca";

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
            </div>
            
    );
}

export default Sobre;