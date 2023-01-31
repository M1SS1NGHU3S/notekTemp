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
        height: "inherit",
        width: "initial"
    }

    return (
        <section className="sobre-missao">
            <div className="sobre-missao--container notek-container">
                <div className="missao--parent">
                    <div className="missao-left missao1 column">
                        <ImageBox bgImage={imgMissao} text="Missão" />
                    </div>
                    <div className="missao-right missao1 column">
                        <TextBox paragraphs={textboxContent[0]} style={{height: "auto", width: "initial"}} />
                        <TextBox paragraphs={textboxContent[1]} style={{height: "auto", width: "initial"}} />
                    </div>
                </div>
                <div>
                    <div className="missao-left missao2 column">
                        <ImageBox bgImage={imgVisao} text="Visão" />
                    </div>
                    <div className="missao-right missao2 column">
                        <TextBox paragraphs={textboxContent[2]} style={textboxStyle} />
                    </div>
                </div>
                <div>
                    <div className="missao-left missao3 column">
                        <ImageBox bgImage={imgValores} text="Valores" />
                    </div>
                    <div className="missao-right missao3 column">
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
        <div className="sobre--img-box" style={bgStyle}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default SobreMissao;