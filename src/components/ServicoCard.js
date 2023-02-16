import "./ServicoCard.css";

function ServicoCard(props) {
    return (
        <div className={`servico-card blue-border`}>
            <img className="servico-card--img" src={props.img} alt={props.alt} />
            <p className="servico-card--title">{props.titulo}</p>
            <p className="servico-card--desc">{props.desc}</p>
        </div>
    )
}

export default ServicoCard;