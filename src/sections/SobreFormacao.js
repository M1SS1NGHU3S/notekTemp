import "./SobreFormacao.css";
import crisImg from "../img/formacao-cris.png";
import vanessaImg from "../img/formacao-vanessa.png";
import gilImg from "../img/formacao-gil.png";
import ledaImg from "../img/formacao-leda.png";

function SobreFormacao() {
    const gestoras = [
        {
            img: crisImg,
            nome: "Cris Fontes",
            habilidades: ["Técnica Administrativa", "Técnica Contábil", "Gestora em Marketing", "Professora de Marketing e Empreendedorismo"],
            altText: "cris"
        },
        {
            img: vanessaImg,
            nome: "Vanessa Fontes Q. Anastácio",
            habilidades: ["Técnica Administrativa", "Contadora", "Professora de Contabilidade"],
            altText: "vanessa"
        },
        {
            img: gilImg,
            nome: "Gil Fontes",
            habilidades: ["Técnica Contábil", "Gestora em RH Departamento Pessoal"],
            altText: "gil"
        },
        {
            img: ledaImg,
            nome: "Gisleide Fontes Benedito",
            habilidades: ["Técnica Contábil", "Especialista em Escrituração Fiscal"],
            altText: "leda"
        },
    ]
    const gestoraCards = gestoras.map((value) => <GestoraCard img={value.img} altText={value.altText} nome={value.nome} habilidades={value.habilidades} />)

    return (
        <section className="sobre-formacao">
            <div className="sobre-formacao--container">
                <h2 className="formacao--title section-title">Formação</h2>
                <h3 className="formacao--subtitle">Habilidades das Gestoras e Diretoras</h3>

                <div className="sobre-formacao--cards">
                    {gestoraCards}
                </div>
            </div>
        </section>
    );
}

function GestoraCard(props) {
    const habilidades = props.habilidades.map((value) => <li><p>{value}</p></li>)

    return (
        <div className={`gestora-card gestora-card--${props.altText}`}>
            <img className="gestora-card--img" src={props.img} alt={`gestora ${props.altText}`} />

            <div className="gestora-card--content card-content">
                <h3 className="gestora-card--nome">{props.nome}</h3>
                <ul className="gestora-card--list">
                    {habilidades}
                </ul>
            </div>
            
        </div>
    )
}

export default SobreFormacao;