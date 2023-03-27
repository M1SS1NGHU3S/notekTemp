import "./AddNoticiaForms.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Axios from "axios";

function AddNoticiaForms() {
    // const [noticiaTitle, setNoticiaTitle] = useState('');
    // const [noticiaLink, setNoticiaLink] = useState('');
    // const [noticiaDate, setNoticiaDate] = useState('');

    const onSubmit = (e) => {
        // setNoticiaTitle(e.target.noticiaTitulo.value);
        // setNoticiaLink(e.target.noticiaLink.value);
        // setNoticiaDate(e.target.noticiaData.value);

        Axios.post("http://localhost:3001/noticias/add", {
            noticiaTitle: e.target.noticiaTitulo.value,
            noticiaLink: e.target.noticiaLink.value,
            noticiaDate: e.target.noticiaData.value
        }).then(() => alert("Notícia adicionada com sucesso!!"));
    };

    return (
        <section className="noticia-forms">
            <div className="container noticia-forms--container">
                <Form onSubmit={onSubmit}>
                    <div className="noticia-forms--row1">
                        <Form.Group className="noticia-forms--group">
                            <Form.Label><h3>Título da Notícia</h3></Form.Label>
                            <Form.Control type="text" name="noticiaTitulo" required />
                        </Form.Group>
                        <Form.Group className="noticia-forms--group">
                            <Form.Label><h3>Data da Notícia</h3></Form.Label>
                            <Form.Control type="date" name="noticiaData" required />
                        </Form.Group>
                    </div>

                    <Form.Group className="noticia-forms--group">
                        <Form.Label><h3>Link da Notícia</h3></Form.Label>
                        <Form.Control type="url" name="noticiaLink" required />
                    </Form.Group>
                    <Button variant="info" className="blue-btn noticia-forms--btn" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default AddNoticiaForms;