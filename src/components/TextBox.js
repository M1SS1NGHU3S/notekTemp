import "./TextBox.css"

function TextBox(props) {
    const paragraphs = props.paragraphs.map((value) => <h3>{value}</h3>);

    return (
        <div className="blue-border text-box">
            {paragraphs}
        </div>
    )
}

export default TextBox;