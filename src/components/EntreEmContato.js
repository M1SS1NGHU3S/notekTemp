import "./EntreEmContato.css";
import {bgStyle} from "./EntreEmContatoContent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

function EntreEmContato() {
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
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_0nbblwk", 
            "template_88vzmzl", 
            form.current, 
            "hFtKDxgjdYsIBxtnR").then
        (
            (result) => {
                console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );

        Array.from(document.querySelectorAll("input, textarea")).forEach(
            input => (input.value = "")
        );
    }

    return (
        <div className="contato-form">
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="form-group form-group1">
                    <Form.Label><h3>Nome</h3></Form.Label>
                    <Form.Control type="text" name="fromName" />
                </Form.Group>
                <Form.Group className="form-group form-group2">
                    <Form.Label><h3>Email</h3></Form.Label>
                    <Form.Control type="email" name="fromEmail" />
                </Form.Group>
                <Form.Group className="form-group form-group3">
                    <Form.Label><h3>Mensagem</h3></Form.Label>
                    <Form.Control as="textarea" rows={5} name="mensagemContent" />
                </Form.Group>
                <Button variant="info" className="blue-btn contato-form--btn" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
        
    )
}

export default EntreEmContato;