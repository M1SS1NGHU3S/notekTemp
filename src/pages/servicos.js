import {mockupServicosImg} from "../img/Imports";
import {
    MockUp,
    ServicosFull
} from "../sections/Imports";

function Servicos() {
    return (
        <>
            <MockUp
                title="O escritório NOTEK Assessoria Empresarial em Contabilidade, 
                    presta serviços nas seguintes áreas:"
                bgImage={mockupServicosImg}
            />    
            <ServicosFull />
        </>
    );
}

export default Servicos;