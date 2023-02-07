import "./SobreBase.css"
import img1 from "../img/sobre-base1.png";
import img2 from "../img/sobre-base2.png";
import TextBox from "../components/TextBox";

function SobreBase() {
    const textboxContent = [
        [
            "Sempre atenta as necessidades de seus clientes e do mercado a " +
            "Notek se destaca pelo diferencial no atendimento e pelas " +
            "estratégias utilizadas, baseada nas experiências de suas gestoras."
        ],
        [
            "Transparência, ética e comprometimento é a nossa base para " +
            "estrutura a base do seu negócio!",
            "Contabilidade Inteligente é poder contar conosco sempre que " +
            "precisar."
        ]
    ]
    const textboxStyle = {
        width: "inherit",
        height: "inherit"
    };

    return (
        <section className="sobre-base">
            <div className="sobre-base--container container desktop">
                <div className="sobre-base--item">
                    <TextBox paragraphs={textboxContent[0]} style={textboxStyle} />
                </div>
                <div className="sobre-base--item">
                    <LargeImgBox bgImage={img1} />
                </div>
                <div className="sobre-base--item">
                    <LargeImgBox bgImage={img2} />
                </div>
                <div className="sobre-base--item">
                    <TextBox paragraphs={textboxContent[1]} style={textboxStyle} />
                </div>
            </div>
            
            <div className="sobre-base--container container mobile">
                <div className="sobre-base--item item-img">
                    <LargeImgBox bgImage={img1} />  
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox paragraphs={textboxContent[0]} style={textboxStyle} />
                </div>
                <div className="sobre-base--item item-img">
                    <LargeImgBox bgImage={img2} />
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox paragraphs={textboxContent[1]} style={textboxStyle} />
                </div>
            </div>
        </section>
    );
}

function LargeImgBox(props) {
    const bgStyle = {
        height: "inherit",
        width: "inherit",
        background: `url(${props.bgImage}), rgba(1, 174, 240, 0.5)`,
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <div className="img-box" style={bgStyle}></div>  
    );
}

export default SobreBase;