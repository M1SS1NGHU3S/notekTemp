import { mockupSobreImg } from "../img/Imports"
import {
    MockUp,
    SobreMudanca,
    SobreRegiao,
    SobreContent,
    SobreMissao,
    SobreFormacao,
} from "../sections/Imports";

function Sobre() {
    return (
            <div>
                <MockUp
                    title="Sobre Nós"
                    text="Agora somos Notek Assessoria Empresarial!"
                    button={false}
                    bgImage={mockupSobreImg}
                />     
                <SobreMudanca isHome={false} />
                <SobreRegiao />
                <SobreContent />
                <SobreFormacao />
            </div>
            
    );
}

export default Sobre;