import "./AddBlogForms.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Axios from "axios";


function AddBlogForms() {
    const [textoHtml, setTextoHtml] = useState('');
    const currentDate = (new Date()).toISOString().split('T')[0];
    
    const onSubmit = (e) => {
        Axios.post("http://localhost:3001/blogs-add", {
            blogTitle: e.target.tituloBlog.value,
            blogDescription: e.target.descricaoBlog.value,
            blogImageUrl: e.target.imagemBlog.value,
            blogImageDesc: e.target.imagemDescBlog.value,
            blogTextHtml: textoHtml,
            blogDate: currentDate
        }).then(() => alert("Notícia adicionada com sucesso!!"));
    }

    return (
        <section className="add-blog">
            <div className="container add-blog--container">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Título do Blog</h3></Form.Label>
                        <Form.Control type="text" name="tituloBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Descrição do Blog</h3></Form.Label>
                        <Form.Control type="text" name="descricaoBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Link da Imagem</h3></Form.Label>
                        <Form.Control type="url" name="imagemBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Descrição da Imagem</h3></Form.Label>
                        <Form.Control type="text" name="imagemDescBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Título do Blog</h3></Form.Label>
                        <ReactQuill 
                            theme="snow" 
                            value={textoHtml}
                            onChange={setTextoHtml}
                            className="add-blog--textarea" 
                        />
                    </Form.Group>
                    <Button variant="info" className="blue-btn add-blog--btn" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default AddBlogForms;