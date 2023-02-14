import "./ServicosHome.css";
import {
    servicoCalcImg,
    servicoPapelImg,
    servicoMaosImg
} from "../img/Imports";
import {
    ServicoCard
} from "../components/Imports"
import Button from "react-bootstrap/Button";

function ServicosHome() {
    const cardsContent = [
        {
            img: servicoCalcImg,
            titulo: "Contabilidade",
            desc: "Descrição do serviço ofertado",
            alt: "Ícone de calculadora",
            classId: "contabil"
        },
        {
            img: servicoPapelImg,
            titulo: "Assessoria Empresarial",
            desc: "Descrição do serviço ofertado",
            alt: "Ícone de duas mãos se cumprimentando",
            classId: "assessoria"
        },
        {
            img: servicoMaosImg,
            titulo: "Item 3",
            desc: "Descrição do serviço ofertado",
            alt: "Ícone de jornal",
            classId: "item3"
        },
    ]
    const allCards = cardsContent.map((value, index) =>
        <ServicoCard 
            key={index}
            img={value.img} 
            titulo={value.titulo} 
            desc={value.desc} 
            classId={value.classId}
        />
    )

    return (
        <section className="servicos-home">
            <div className="servicos-home--container container">
                <h2 className="section-title">Serviços</h2>

                <div className="servicos-home--cards">
                    {allCards}
                </div>
                <Button variant="info" href="/servicos" className="blue-btn servicos-home--btn">
                    Mais Informações
                </Button>
            </div>
        </section>
    );
}

export default ServicosHome;