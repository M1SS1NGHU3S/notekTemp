import {mockupServicosImg} from "../img/Imports";
import {
    MockUp,
    ServicosFull
} from "../sections/Imports";

function Servicos() {
    const titleText = ["O escritório ", 
        <strong key="mockup-bold">
            NOTEK Acessoria Empresarial em Contabilidade
        </strong>, 
        ", presta serviços nas seguintes áreas:"]

    return (
        <>
            <MockUp
                title={titleText}
                bgImage={mockupServicosImg}
            />    
            <ServicosFull />
        </>
    );
}

export default Servicos;