import "./SobreRegiao.css"

function SobreRegiao() {
    return (
        <section className="sobre-regiao">
            <iframe 
                title="location" 
                className="sobre-regiao--map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.030084664957!2d-46.418060048901005!3d-23.710619672931944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6cedfaac2359%3A0x508e368408d24400!2sNotek%20Cont%C3%A1bil!5e0!3m2!1sen!2sbr!4v1675105748398!5m2!1sen!2sbr"
                style={{border: "none"}} 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
            />

            <div className="sobre-regiao--bg">
                <div className="sobre-regiao--container container">
                    <h3 className="sobre-regiao--text">
                        Atuamos desde 1999 no ramo de contabilidade e assessoria 
                        empresarial na cidade de Ribeirão Pires e região.
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default SobreRegiao;