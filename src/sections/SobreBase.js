import "./SobreBase.css"
import ImgBox from "../components/ImgBox";
import img1 from "../img/sobre-base1.png";
import img2 from "../img/sobre-base2.png";

function SobreBase() {
    const bgColorStyle = "rgba(1, 174, 240, 0.5)";

    return (
        <section className="sobre-base">
            <div className="sobre-base--container notek-container desktop">
                <div className="sobre-base--item blue-border text-box">
                    <h3>
                        Sempre atenta as necessidades de seus clientes e do mercado a Notek se destaca pelo
                        diferencial no atendimento e pelas estratégias utilizadas, baseada nas experiências de suas gestoras.
                    </h3>
                </div>
                <div className="sobre-base--item">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img1} />
                </div>
                <div className="sobre-base--item">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img2} />
                </div>
                <div className="sobre-base--item blue-border text-box">
                    <h3>
                        Transparência, ética e comprometimento é a nossa base para estrutura a base do seu negócio!
                    </h3>
                    <h3>
                        Contabilidade Inteligente é poder contar conosco sempre que precisar.
                    </h3>
                </div>
            </div>
            
            <div className="sobre-base--container notek-container mobile">
                <div className="sobre-base--item item-img">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img1} />  
                </div>
                <div className="sobre-base--item item-text blue-border text-box">
                    <h3>
                        Sempre atenta as necessidades de seus clientes e do mercado a Notek se destaca pelo
                        diferencial no atendimento e pelas estratégias utilizadas, baseada nas experiências de suas gestoras.
                    </h3>
                </div>
                <div className="sobre-base--item item-img">
                    <ImgBox bgColorStyle={bgColorStyle} bgImage={img2} />
                </div>
                <div className="sobre-base--item item-text blue-border text-box">
                    <h3>
                        Transparência, ética e comprometimento é a nossa base para estrutura a base do seu negócio!
                    </h3>
                    <h3>
                        Contabilidade Inteligente é poder contar conosco sempre que precisar.
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default SobreBase;