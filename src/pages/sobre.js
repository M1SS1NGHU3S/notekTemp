import sobreImg from "../img/mockup-sobre.png"
import MockUp from "../components/MockUp";
import SobreMudanca from "../sections/SobreMudanca";
import SobreRegiao from "../sections/SobreRegiao";
import SobreBase from "../sections/SobreBase";
import SobreMissao from "../sections/SobreMissao";
import SobreFormacao from "../sections/SobreFormacao";
import EntreEmContato from "../sections/EntreEmContato";

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
                <SobreFormacao />
                <EntreEmContato />
            </div>
            
    );
}

export default Sobre;