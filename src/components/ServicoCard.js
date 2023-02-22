import "./ServicoCard.css";

function ServicoCard(props) {
    const homeClass = props.isHome && "servico-card-home";
    const servicosClass = props.isHome || "servico-card-servicos";

    return (
        <div className={`servico-card servico-card-${props.classId} ${homeClass} ${servicosClass} blue-border`}>
            <img className="servico-card--img" src={props.img} alt={props.alt} />
            <p className="servico-card--title">{props.titulo}</p>
            <p className="servico-card--desc">{props.descricao}</p>
        </div>
    )
}

export default ServicoCard;