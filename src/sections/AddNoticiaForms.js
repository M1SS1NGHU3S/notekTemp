import "./AddNoticiaForms.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from "react";

function AddNoticiaForms() {
    const navigate = useNavigate();
    const noticiaId = useParams().noticiaId;

    const [noticiaDate, setNoticiaDate] = useState('');
    const [noticiaTitulo, setNoticiaTitulo] = useState('');
    const [noticiaLink, setNoticiaLink] = useState('');

    useEffect(() => {
        if (noticiaId) {
            Axios.get(`http://localhost:3001/noticias/${noticiaId}`).then((response) => {
                let noticiaContent = response.data[0];
                setNoticiaTitulo(noticiaContent["Titulo"]);
                setNoticiaLink(noticiaContent["Link"]);
                setNoticiaDate(noticiaContent["Criado_Em"].split("T")[0]);
            })
        }
    }, [noticiaId])

    const onSubmit = (e) => {
        Axios.post("http://localhost:3001/noticias-add", {
            noticiaTitle: e.target.noticiaTitulo.value,
            noticiaLink: e.target.noticiaLink.value,
            noticiaDate: e.target.noticiaData.value
        }).then(() => alert("Notícia adicionada com sucesso!!"));

        navigate("/admin/start");
    };

    return (
        <section className="noticia-forms">
            <div className="container noticia-forms--container">
                <Form onSubmit={onSubmit}>
                    <div className="noticia-forms--row1">
                        <Form.Group className="admin-forms--group">
                            <Form.Label><h3>Título da Notícia</h3></Form.Label>
                            <Form.Control value={noticiaTitulo} type="text" name="noticiaTitulo" required />
                        </Form.Group>
                        <Form.Group className="admin-forms--group">
                            <Form.Label><h3>Data da Notícia</h3></Form.Label>
                            <Form.Control value={noticiaDate} type="date" name="noticiaData" required />
                        </Form.Group>
                    </div>

                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Link da Notícia</h3></Form.Label>
                        <Form.Control value={noticiaLink} type="url" name="noticiaLink" required />
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