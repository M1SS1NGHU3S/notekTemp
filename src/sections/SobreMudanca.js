import bgImage from "../img/sobre-mudanca-bg.png";
import logo from "../img/big-logo.png";
import Button from "react-bootstrap/Button";
import "./SobreMudanca.css";

function SobreMudanca(props) {
    const additionalElement = props.isHome ? 
        <Button href="/sobre" className="blue-btn btn btn-info sobre-mudanca--btn">
            Ler Mais
        </Button> : 
        <h3 className="sobre-mudanca--texto sobre--quote">
            "A mudança nos leva a novos horizontes e um maior desenvolvimento profissional."
        </h3>;
    const backgroundStyle = {
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: "no-repeat"
    }

    

    return (
        <section className="sobre-mudanca">
            <h2 className="section-title">Sobre</h2>
            <div className="sobre-mudanca--container notek-container blue-border desktop" style={backgroundStyle}>
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

                <div className="sobre-mudanca--container notek-container blue-border mobile" style={backgroundStyle}>
                    <img className="sobre-mudanca--img" src={logo} alt="Notek Logo" />

                    <p className="sobre-mudanca--texto">
                        Para registro de nossa marca, precisamos passar por uma pequena mudança, porém, ela agora é todinha nossa!
                    </p> 
                    <p className="sobre-mudanca--texto">
                        Agradecemos por acreditarem e confiarem em nós. Estaremos sempre juntos nos novos 
                        e maiores desafios que estão por vir.  
                    </p>
                    {additionalElement}
                </div>
                
            </div>
        </section>
    );
}

export default SobreMudanca;