import manutencaoImg from "../assets/img/em-manutencao.png";
import "../assets/css/style.css"

function Manutencao() {
    return (
        <div id="manutencao">
            <img src={manutencaoImg} alt="Em construção" />
            <h3>Oops, você chegou muito cedo! O site ainda está em construção.</h3>
        </div>
    );
}

export default Manutencao;