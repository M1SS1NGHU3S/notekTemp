function MockUp(props) {
    const bgStyle = {backgroundImage: "url(../img/mockup-home.png)"}

    return (
        <div className="mockup" style={{backgroundImage: "url(../img/mockup-home.png)"}}>
            <h1>{props.title}</h1>
            {props.button && <button href={props.buttonLink}>{props.buttonText}</button>}
        </div>
    );
}

export default MockUp;