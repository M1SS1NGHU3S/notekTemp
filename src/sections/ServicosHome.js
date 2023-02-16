import "./ServicosHome.css";
import { servicoCardContent } from "./ServicosHomeData";
import Button from "react-bootstrap/Button";

function ServicosHome() {
    const generateCardsHome = servicoCardContent.map((value, index) =>
        <ServicoCard 
            key={index}
            img={value.img} 
            titulo={value.titulo} 
            alt={value.alt}
        />
    );

    return (
        <section className="servicos-home">
            <div className="servicos-home--container container">
                <h2 className="section-title">Serviços</h2>

                <div className="servicos-home--cards">
                    {generateCardsHome}
                </div>
                <Button variant="info" href="/servicos" className="blue-btn servicos-home--btn">
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