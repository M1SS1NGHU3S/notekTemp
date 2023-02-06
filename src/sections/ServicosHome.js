import "./ServicosHome.css";
import calcImg from "../img/servico-calc.png";
import papelImg from "../img/servico-papel.png";
import maosImg from "../img/servico-maos.png";
import Button from "react-bootstrap/Button";

function ServicosHome() {
    const cardsContent = [
        {
            img: calcImg,
            titulo: "Contabilidade",
            desc: "Descrição do serviço ofertado",
            alt: "Ícone de calculadora",
            classId: "contabil"
        },
        {
            img: maosImg,
            titulo: "Assessoria Empresarial",
            desc: "Descrição do serviço ofertado",
            alt: "Ícone de duas mãos se cumprimentando",
            classId: "assessoria"
        },
        {
            img: papelImg,
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
            <div className="servicos-home--container notek-container">
                <h2 className="section-title">Serviços</h2>

                <div className="servicos-home--cards">
                    {allCards}
                </div>
                <Button href="/servicos" className="blue-btn servicos-home--btn">
                    Mais Informações
                </Button>
            </div>
        </section>
    );
}
 
function ServicoCard(props) {
    return (
        <div className={`servico-card servico-card--${props.classId} blue-border`}>
            <img className="servico-card--img" src={props.img} alt={props.alt} />
            <p className="servico-card--title">{props.titulo}</p>
            <p className="servico-card--desc">{props.desc}</p>
        </div>
    )
}

export default ServicosHome;