import "./SobreMissao.css";
import TextBox from "../components/TextBox";
import imgValores from "../img/sobre-missao1.png";
import imgVisao from "../img/sobre-missao2.png";
import imgMissao from "../img/sobre-missao3.png";

function SobreMissao() {
    const textboxContent = [
        [
            "Executar serviços contábeis com qualidade, visando à geração " + 
            "de resultados e satisfação das necessidades de nossos parceiros " +
            "e clientes, seja na área de prestação de serviços, indústrias, " +
            "comercio e também um olhar cuidadoso com o MEI."
        ],
        [
            "Respeitar às políticas públicas, nas esferas estaduais, " +
            "municipais e federais, elaborando e executando os objetivos " +
            "de nossos clientes de forma clara e concisa."
        ],
        [
            "Ser referência como uma das melhores empresas nacionais no ramo " +
            "de assessoria e consultoria contábil."
        ],
        [
            "Competência, Qualidade, Confiança, Ética, Responsabilidade " +
            "Profissional, Credibilidade, Comprometimento, Interação, " +
            "Inovação, Técnicas, Criatividade e Responsabilidade Social e " +
            "ambiental."
        ]
    ];
    const textboxStyle = {
        height: "-webkit-fill-available",
        width: "initial",
    }

    return (
        <section className="sobre-missao">
            <div className="sobre-missao--container notek-container">
                <div className="missao--parent">
                    <ImageBox id="1" bgImage={imgMissao} text="Missão" />

                    <div className="missao-right missao1">
                        <TextBox paragraphs={textboxContent[0]} style={textboxStyle} />
                        <TextBox paragraphs={textboxContent[1]} style={textboxStyle} />
                    </div>
                </div>
                <div className="missao--parent" style={{height: "200px"}}>
                    <ImageBox id="2" bgImage={imgVisao} text="Visão" />

                    <div className="missao-right missao2">
                        <TextBox paragraphs={textboxContent[2]} style={textboxStyle} />
                    </div>
                </div>
                <div className="missao--parent">
                    <ImageBox id="3" bgImage={imgValores} text="Valores" />

                    <div className="missao-right missao3">
                        <TextBox paragraphs={textboxContent[3]} style={textboxStyle} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ImageBox(props) {
    const bgStyle = {
        backgroundImage: `linear-gradient(180.03deg, #01AEF0 11.42%, 
            rgba(1, 174, 240, 0) 99.97%), url(${props.bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <div className={`sobre--img-box sobre--img-box${props.id}`} style={bgStyle}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default SobreMissao;