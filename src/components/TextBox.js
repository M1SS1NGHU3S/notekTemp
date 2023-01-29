import "./TextBox.css";

function TextBox(props) {
    const paragrafos = props.paragrafos.map((value) => <h3>{value}</h3>)

    return (
        <div className="blue-border text-box">
            {paragrafos}
        </div>
    );
}

export default TextBox;