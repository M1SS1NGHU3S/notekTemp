import "./EntreEmContato.css";
import formImg from "../img/contato-form.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

function EntreEmContato() {
    const bgStyle = {
        backgroundImage: `linear-gradient(rgba(228, 235, 238, 0.8), 
            rgba(228, 235, 238, 0.8)), url(${formImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return (
        <section className="entre-contato">
            <div className="entre-contato--container container blue-border" style={bgStyle}>
                <div className="entre-contato--text-column">
                    <h1 className="entre-contato--title">Entre em contato conosco agora mesmo!</h1>
                </div>
                <ContatoForm />
            </div>
        </section>
    );
}

function ContatoForm() {
    return (
        <div className="contato-form">
            <Form>
                <Form.Group className="form-group form-group1">
                    <Form.Label><h3>Nome</h3></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="form-group form-group2">
                    <Form.Label><h3>Email</h3></Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="form-group form-group3">
                    <Form.Label><h3>Mensagem</h3></Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="info" className="blue-btn contato-form--btn" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
        
    )
}

export default EntreEmContato;