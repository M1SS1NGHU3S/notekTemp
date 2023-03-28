import "./AddBlogForms.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function AddBlogForms() {
    const navigate = useNavigate();
    const blogId = useParams().blogId;

    const [blogTitulo, setBlogTitulo] = useState('');
    const [blogDescricao, setBlogDescricao] = useState('');
    const [linkImagem, setLinkImagem] = useState('');
    const [descricaoImagem, setDescricaoImagem] = useState('');
    const [textoHtml, setTextoHtml] = useState('');

    useEffect(() => {
        if (blogId) {
            Axios.get(`http://localhost:3001/blogs/${blogId}`).then((response) => {
                let blogContent = response.data[0];

                setBlogTitulo(blogContent["Titulo"]);
                setBlogDescricao(blogContent["Descricao"]);
                setTextoHtml(blogContent["Texto_Html"]);
                setLinkImagem(blogContent["Imagem_Path"]);
                setDescricaoImagem(blogContent["Imagem_Desc"]);
            });
        }
    }, [blogId]);

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

        navigate("/admin/start");
    }

    return (
        <section className="add-blog">
            <div className="container add-blog--container">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Título do Blog</h3></Form.Label>
                        <Form.Control value={blogTitulo} type="text" name="tituloBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Descrição do Blog</h3></Form.Label>
                        <Form.Control value={blogDescricao} type="text" name="descricaoBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Link da Imagem</h3></Form.Label>
                        <Form.Control value={linkImagem} type="url" name="imagemBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Descrição da Imagem</h3></Form.Label>
                        <Form.Control value={descricaoImagem} type="text" name="imagemDescBlog" required />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Conteúdo do Blog</h3></Form.Label>
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