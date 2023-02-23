import "./SobreContent.css";
import {
    womanTalkingImg,
    officeWritingImg,
    intertwinedImg,
    openEyeImg,
    targetImg
} from "../img/Imports";
import { 
    sobre
} from "../sections-data/Imports";

function SobreContent() {
    return (
        <section className="sobre-content">
            <div className="container">
                <SobreBase />
                <SobreMissao />
            </div>
        </section>
    )
}

function SobreBase() {
    const allImgBox = [
        <SobreBaseImgBox key={1} bgImage={womanTalkingImg} />,
        <SobreBaseImgBox key={2} bgImage={officeWritingImg} />
    ];
    const allTextBox = sobre.baseText.map((value, index) =>
        <TextBoxBase key={index} paragraphs={value} />
    );

    return (
        <div className="sobre-base">
            <div className="sobre-base--container desktop">
                <div className="sobre-base--item">
                    {allTextBox[0]}
                </div>
                <div className="sobre-base--item">
                    {allImgBox[0]}
                </div>
                <div className="sobre-base--item">
                    {allImgBox[1]}
                </div>
                <div className="sobre-base--item">
                    {allTextBox[1]}
                </div>
            </div>
            
            <div className="sobre-base--container mobile">
                <div className="sobre-base--item item-img">
                    {allImgBox[0]} 
                </div>
                <div className="sobre-base--item item-text">
                    {allTextBox[0]}
                </div>
                <div className="sobre-base--item item-img">
                    {allImgBox[1]}
                </div>
                <div className="sobre-base--item item-text">
                    {allTextBox[1]}
                </div>
            </div>
        </div>
    )
}

function SobreMissao() {
    const allImgBox = [
        <SobreMissaoImgBox key={1} id={1} bgImage={targetImg} text="Missão" />,
        <SobreMissaoImgBox key={2} id={2} bgImage={openEyeImg} text="Visão" />,
        <SobreMissaoImgBox key={3} id={3} bgImage={intertwinedImg} text="Valores" />
    ]
    const allTextBox = sobre.missaoText.map((value, index) =>
        <TextBoxMissao key={index} text={value} />
    );

    return (
        <div className="sobre-missao">
            <div className="sobre-missao--container">
                <div className="missao--parent">
                    {allImgBox[0]}

                    <div className="missao-right missao1">
                        {allTextBox[0]}
                        {allTextBox[1]}
                    </div>
                </div>
                <div className="missao--parent" style={{height: "200px"}}>
                    {allImgBox[1]}

                    <div className="missao-right missao2">
                        {allTextBox[2]}
                    </div>
                </div>
                <div className="missao--parent">
                    {allImgBox[2]}

                    <div className="missao-right missao3">
                        {allTextBox[3]}
                    </div>
                </div>
            </div>
        </div>
    )
}

function TextBoxBase(props) {
    const paragraphs = props.paragraphs.map((value) => <h3>{value}</h3>);

    return (
        <div className="blue-border text-box text-box-base">
            {paragraphs}
        </div>
    );
}

function TextBoxMissao(props) {
    return (
    <div className="blue-border text-box text-box-missao">
        <h3>{props.text}</h3>
    </div>
    );
}

function SobreBaseImgBox(props) {
    const bgStyle = {
        background: `url(${props.bgImage}), rgba(1, 174, 240, 0.5)`,
    }

    return (
        <div className="sobre-base-img-box" style={bgStyle}></div>  
    );
}

function SobreMissaoImgBox(props) {
    const bgStyle = {
        backgroundImage: `linear-gradient(180.03deg, #01AEF0 11.42%, rgba(1, 174, 240, 0) 99.97%), url(${props.bgImage})`,
    }

    return (
        <div className={`missao-img-box missao-img-box${props.id}`} style={bgStyle}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default SobreContent;