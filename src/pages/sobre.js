import sobreImg from "../img/mockup-sobre.png"
import MockUp from "../components/MockUp";
import SobreMudanca from "../sections/SobreMudanca";
import SobreRegiao from "../sections/SobreRegiao";
import SobreBase from "../sections/SobreBase";
import SobreMissao from "../sections/SobreMissao";

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
                <SobreBase />
                <SobreMissao />
            </div>
            
    );
}

export default Sobre;