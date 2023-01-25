import bgImage from "../img/sobre-mudanca-bg.png";
import logo from "../img/big-logo.png";
import {Link} from "react-router-dom"
import "./SobreMudanca.css";

function SobreMudanca(props) {
    const additionalElement = props.isHome ? <Link role="button" tabIndex="0" to="/sobre" class="blue-btn btn btn-info sobre-mudanca--btn">Conhecer</Link> : 
        <p className="sobre--quote">"A mudança nos leva a novos horizontes e um maior desenvolvimento profissional."</p>;

    return (
        <section className="sobre-mudanca">
            <h1>Sobre</h1>
            <div className="sobre-mudanca--container" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
                <div className="sobre-mudanca--column column left">
                    <p className="sobre-mudanca--texto">
                        Para registro de nossa marca, precisamos passar por uma pequena mudança, porém, ela agora é todinha nossa!
                    </p> 
                    <p className="sobre-mudanca--texto">
                        Agradecemos por acreditarem e confiarem em nós. Estaremos sempre juntos nos novos 
                        e maiores desafios que estão por vir.  
                    </p>
                    {additionalElement}
                </div>
                <div className="sobre-mudanca--column column right">
                    <img className="sobre-mudanca--img" src={logo} alt="Notek Logo" />
                </div>
                
            </div>
        </section>
    );
}

export default SobreMudanca;