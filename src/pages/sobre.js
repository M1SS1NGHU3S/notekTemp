import { mockupSobreImg } from "../img/Imports"
import {
    MockUp,
    SobreMudanca,
    SobreRegiao,
    SobreContent,
    SobreFormacao,
} from "../sections/Imports";

function Sobre() {
    return (
            <>
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
            </>
            
    );
}

export default Sobre;