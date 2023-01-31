import "./SobreMissao.css";
import TextBox from "../components/TextBox";

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
    const textBoxes = textboxContent.map((value) => <TextBox paragraphs={value} />);

    return (
        <section className="sobre-missao">
            <div className="sobre-missao--container notek-container">
                {textBoxes}
            </div>
        </section>
    );
}

export default SobreMissao;