import "./ServicosFull.css";
import { servicos } from "../sections-data/Imports";

function ServicosFull() {
    return (
        <section className="servicos-full">
            <div className="container servicos-full--container">
                {servicos.generateCardsServicos}
            </div>
        </section>
    );
}

export default ServicosFull;