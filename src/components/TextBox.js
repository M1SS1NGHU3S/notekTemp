import "./TextBox.css"

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

export default TextBox;