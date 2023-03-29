import "./AddBlogForms.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Axios from "axios";
import axios from "axios";
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
        async function getBlogContent() {
            const returnBlog = await axios({
                method: "get",
                url: `http://localhost:3001/blogs/${blogId}`
            });

            const tempBlog = await returnBlog.data;

            setBlogTitulo(tempBlog[0]["Titulo"]);
            setBlogDescricao(tempBlog[0]["Descricao"]);
            setTextoHtml(tempBlog[0]["Texto_Html"]);
            setLinkImagem(tempBlog[0]["Imagem_Path"]);
            setDescricaoImagem(tempBlog[0]["Imagem_Desc"]);
        }

        if (blogId) {
            getBlogContent();
        }
    }, [blogId]);

    const currentDate = (new Date()).toISOString().split('T')[0];

    const onSubmit = () => {
        if (blogId) {
            Axios.put("http://localhost:3001/blogs-update", {
                blogId: blogId,
                blogTitulo: blogTitulo,
                blogDescricao: blogDescricao,
                blogConteudo: textoHtml,
                blogImagem: linkImagem,
                imagemDescricao: descricaoImagem
            }).then(() => alert("Blog atualizado com sucesso!!"));
        }
        else {
            Axios.post("http://localhost:3001/blogs-add", {
                blogTitle: blogTitulo,
                blogDescription: blogDescricao,
                blogImageUrl: linkImagem,
                blogImageDesc: descricaoImagem,
                blogTextHtml: textoHtml,
                blogDate: currentDate
            }).then(() => alert("Blog adicionada com sucesso!!"));
        }

        navigate("/admin/start");
    }

    return (
        <section className="add-blog">
            <div className="container add-blog--container">
                <Form>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Título do Blog</h3></Form.Label>
                        <Form.Control 
                            defaultValue={blogTitulo} 
                            onChange={(e) => {
                                setBlogTitulo(e.target.value);
                            }}
                            type="text" 
                            name="tituloBlog" 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Descrição do Blog</h3></Form.Label>
                        <Form.Control 
                            defaultValue={blogDescricao} 
                            onChange={(e) => {
                                setBlogDescricao(e.target.value);
                            }}
                            type="text" 
                            name="descricaoBlog" 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Link da Imagem</h3></Form.Label>
                        <Form.Control 
                            defaultValue={linkImagem} 
                            onChange={(e) => {
                                setLinkImagem(e.target.value);
                            }}
                            type="url" 
                            name="imagemBlog" 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Descrição da Imagem</h3></Form.Label>
                        <Form.Control 
                            defaultValue={descricaoImagem} 
                            onChange={(e) => {
                                setDescricaoImagem(e.target.value);
                            }}
                            type="text" 
                            name="imagemDescBlog" 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="admin-forms--group">
                        <Form.Label><h3>Conteúdo do Blog</h3></Form.Label>
                        <ReactQuill 
                            theme="snow" 
                            defaultValue={textoHtml}
                            onChange={setTextoHtml}
                            className="add-blog--textarea" 
                        />
                    </Form.Group>
                    <Button onClick={onSubmit} variant="info" className="blue-btn add-blog--btn" type="button">
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default AddBlogForms;