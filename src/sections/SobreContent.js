import "./SobreContent.css"
import {
    womanTalkingImg,
    officeWritingImg
} from "../img/Imports"
import {
    intertwinedImg,
    openEyeImg,
    targetImg
} from "../img/Imports"
import { 
    sobre
} from "../sections-data/Imports";
import {TextBox} from "../components/Imports"

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
    const textboxStyle = {
        width: "inherit",
        height: "inherit"
    };

    return (
        <div className="sobre-base">
            <div className="sobre-base--container desktop">
                <div className="sobre-base--item">
                    <TextBox paragraphs={sobre.sobreBaseText[0]} style={textboxStyle} />
                </div>
                <div className="sobre-base--item">
                    <LargeImgBox bgImage={officeWritingImg} />
                </div>
                <div className="sobre-base--item">
                    <LargeImgBox bgImage={womanTalkingImg} />
                </div>
                <div className="sobre-base--item">
                    <TextBox paragraphs={sobre.sobreBaseText[1]} style={textboxStyle} />
                </div>
            </div>
            
            <div className="sobre-base--container mobile">
                <div className="sobre-base--item item-img">
                    <LargeImgBox bgImage={officeWritingImg} />  
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox paragraphs={sobre.sobreBaseText[0]} style={textboxStyle} />
                </div>
                <div className="sobre-base--item item-img">
                    <LargeImgBox bgImage={womanTalkingImg} />
                </div>
                <div className="sobre-base--item item-text">
                    <TextBox paragraphs={sobre.sobreBaseText[1]} style={textboxStyle} />
                </div>
            </div>
        </div>
    )
}

function SobreMissao() {

    const textboxStyle = {
        height: "-webkit-fill-available",
        width: "initial",
    }

    return (
        <div className="sobre-missao">
            <div className="sobre-missao--container">
                <div className="missao--parent">
                    <ImageBox id="1" bgImage={targetImg} text="Missão" />

                    <div className="missao-right missao1">
                        <TextBox paragraphs={sobre.sobreMissaoText[0]} style={textboxStyle} />
                        <TextBox paragraphs={sobre.sobreMissaoText[1]} style={textboxStyle} />
                    </div>
                </div>
                <div className="missao--parent" style={{height: "200px"}}>
                    <ImageBox id="2" bgImage={openEyeImg} text="Visão" />

                    <div className="missao-right missao2">
                        <TextBox paragraphs={sobre.sobreMissaoText[2]} style={textboxStyle} />
                    </div>
                </div>
                <div className="missao--parent">
                    <ImageBox id="3" bgImage={intertwinedImg} text="Valores" />

                    <div className="missao-right missao3">
                        <TextBox paragraphs={sobre.sobreMissaoText[3]} style={textboxStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
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

export default SobreContent;