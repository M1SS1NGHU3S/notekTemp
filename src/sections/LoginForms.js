import "./LoginForms.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function LoginForms() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginText, setLoginText] = useState('');

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/usuarios")
            .then((response) => {
                if (response.data["isLogged"] === true) {
                    navigate("/admin/start");
                }
                else {
                    console.log("not logged");
                }
            });
    }, [navigate]);

    const onSubmit = () => {
        Axios.post("http://localhost:3001/usuarios", {
            usuarioName: username,
            password: password
        }).then((result) => {
            if (result.data) {
                window.location.reload();
            }
            else setLoginText("Senha incorreta");
        }).catch((err) => setLoginText("Usuário incorreto"));

    };
  
    return (
        <section className="login-forms">
            <div className="container login-forms--container">
                <Form className="login-forms--form">
                    <Form.Group className="login-forms--group">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            name="usuarioInput" 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="login-forms--group">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            name="passwordInput" 
                            required 
                        />
                    </Form.Group>
                    <h3 className="login-error-text">{loginText}</h3>
                    <Button onClick={onSubmit} variant="info" className="blue-btn login-forms--btn" type="button">
                        Entrar
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default LoginForms;