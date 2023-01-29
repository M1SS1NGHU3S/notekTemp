import "./SobreBase.css"
import TextBox from "../components/TextBox";
import ImgBox from "../components/ImgBox";
import img1 from "../img/sobre-base1.png";
import img2 from "../img/sobre-base2.png";

function SobreBase() {
    const paragrafos = [
        ["Sempre atenta as necessidades de seus clientes e do mercado a Notek " +
         "se destaca pelo diferencial no atendimento e pelas estratégias " +
         "utilizadas, baseada nas experiências de suas gestoras."],
        ["Transparência, ética e comprometimento é a nossa base para estrutura " +
         "a base do seu negócio!",
         "Contabilidade Inteligente é poder contar conosco sempre que precisar."]
    ]
    const bgColorStyle = "rgba(1, 174, 240, 0.5)";

    return (
        <section className="sobre-base">
            <div className="sobre-base--container notek-container desktop">
                <div className="sobre-base--item">
                    <TextBox paragrafos={paragrafos[0]} />
                </div>
                <div className="sobre-base--item">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img1} />
                </div>
                <div className="sobre-base--item">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img2} />
                </div>
                <div className="sobre-base--item">
                    <TextBox paragrafos={paragrafos[1]} />
                </div>
            </div>
            
            <div className="sobre-base--container notek-container mobile">
                <div className="sobre-base--item item-img">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img1} />  
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox paragrafos={paragrafos[0]} />
                </div>
                <div className="sobre-base--item item-img">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img2} />
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox paragrafos={paragrafos[1]} />
                </div>
            </div>
        </section>
    );
}

export default SobreBase;