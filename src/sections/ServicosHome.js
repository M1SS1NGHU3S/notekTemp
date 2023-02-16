import "./ServicosHome.css";
import { servicos } from "../sections-data/Imports";
import Button from "react-bootstrap/Button";

function ServicosHome() {
    

    return (
        <section className="servicos-home">
            <div className="servicos-home--container container">
                <h2 className="section-title">Serviços</h2>

                <div className="servicos-home--cards">
                    {servicos.generateCardsHome}
                </div>
                <Button variant="info" href="/servicos" className="blue-btn servicos-home--btn">
                    Mais Informações
                </Button>
            </div>
        </section>
    );
}

export default ServicosHome;