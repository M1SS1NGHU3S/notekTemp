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
    const allBaseImgBox = [
        <SobreBaseImgBox key={1} bgImage={womanTalkingImg} />,
        <SobreBaseImgBox key={2} bgImage={officeWritingImg} />
    ];

    return (
        <div className="sobre-base">
            <div className="sobre-base--container desktop">
                <div className="sobre-base--item">
                    <TextBox key={1} paragraphs={sobre.baseText[0]} style={sobre.textboxStyleBase} />
                </div>
                <div className="sobre-base--item">
                    {allBaseImgBox[0]}
                </div>
                <div className="sobre-base--item">
                    {allBaseImgBox[1]}
                </div>
                <div className="sobre-base--item">
                    <TextBox key={2} paragraphs={sobre.baseText[1]} style={sobre.textboxStyleBase} />
                </div>
            </div>
            
            <div className="sobre-base--container mobile">
                <div className="sobre-base--item item-img">
                    {allBaseImgBox[0]} 
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox key={3} paragraphs={sobre.baseText[0]} style={sobre.textboxStyleBase} />
                </div>
                <div className="sobre-base--item item-img">
                    {allBaseImgBox[1]}
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox key={4} paragraphs={sobre.baseText[1]} style={sobre.textboxStyleBase} />
                </div>
            </div>
        </div>
    )
}

function SobreMissao() {
    return (
        <div className="sobre-missao">
            <div className="sobre-missao--container">
                <div className="missao--parent">
                    <ImageBox key={1} id="1" bgImage={targetImg} text="Missão" />

                    <div className="missao-right missao1">
                        <TextBox key={5} paragraphs={sobre.missaoText[0]} style={sobre.textboxStyleMissao} />
                        <TextBox key={6} paragraphs={sobre.missaoText[1]} style={sobre.textboxStyleMissao} />
                    </div>
                </div>
                <div className="missao--parent" style={{height: "200px"}}>
                    <ImageBox key={2} id="2" bgImage={openEyeImg} text="Visão" />

                    <div className="missao-right missao2">
                        <TextBox key={3} paragraphs={sobre.missaoText[2]} style={sobre.textboxStyleMissao} />
                    </div>
                </div>
                <div className="missao--parent">
                    <ImageBox key={3} id="3" bgImage={intertwinedImg} text="Valores" />

                    <div className="missao-right missao3">
                        <TextBox key={7} paragraphs={sobre.missaoText[3]} style={sobre.textboxStyleMissao} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function TextBox(props) {
    const boxSize = {
        height: props.style.height,
        width: props.style.width
    }
    const paragraphs = props.paragraphs.map((value) => <h3>{value}</h3>);

    return (
        <div className="blue-border text-box" style={boxSize}>
            {paragraphs}
        </div>
    )
}

function SobreBaseImgBox(props) {
    const bgStyle = {
        background: `url(${props.bgImage}), rgba(1, 174, 240, 0.5)`,
    }

    return (
        <div className="sobre-base-img-box" style={bgStyle}></div>  
    );
}

function ImageBox(props) {
    const bgStyle = {
        backgroundImage: `linear-gradient(180.03deg, #01AEF0 11.42%, 
            rgba(1, 174, 240, 0) 99.97%), url(${props.bgImage})`,
    }

    return (
        <div className={`missao-img-box missao-img-box${props.id}`} style={bgStyle}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default SobreContent;