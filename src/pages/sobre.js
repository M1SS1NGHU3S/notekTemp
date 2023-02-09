import { mockupSobreImg } from "../img/Imports"
import {
    MockUp,
    SobreMudanca,
    SobreRegiao,
    SobreBase,
    SobreMissao,
    SobreFormacao,
    EntreEmContato
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
                <SobreBase />
                <SobreMissao />
                <SobreFormacao />
                <EntreEmContato />
            </div>
            
    );
}

export default Sobre;