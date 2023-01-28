import mapaImg from "../img/sobre-mapa.png";
import "./SobreRegiao.css"

function SobreRegiao() {
    const bgStyle = {
        backgroundImage: `linear-gradient(269.91deg, #01AEF0 32.37%, 
            rgba(217, 217, 217, 0) 99.92%), url(${mapaImg})`,
    };

    return (
        <section className="sobre-regiao" style={bgStyle}>
            <h3 className="sobre-regiao--text">
                Atuamos desde 1999 no ramo de contabilidade e assessoria 
                empresarial na cidade de Ribeirão Pires e região.
            </h3>
        </section>
    );
}

export default SobreRegiao;