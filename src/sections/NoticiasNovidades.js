import "./NoticiasNovidades.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NoticiasNovidades(props) {
    const lastRowStyle = {
        marginBottom: "100px"
    }

    return (
        <section className="noticias-novidades" style={props.lastRow && lastRowStyle}>
            <div className="noticias-novidades--container container">
                <div 
                    className="noticias-novidades--column 
                    noticias-novidades--column1"
                >
                    <h2 className="noticias-novidades--title">
                        Fique por dentro de todas as novidades!
                    </h2>
                </div>
                <div 
                    className="noticias-novidades--column 
                    noticias-novidades--column2"
                >
                    <Form className="noticias-novidades--forms">
                        <Form.Group className="form-group">
                            <Form.Control 
                                placeholder="Seu melhor email" 
                                type="email" 
                                className="noticias-novidadades--form-control"
                            />
                        </Form.Group>

                        <Button 
                            variant="info" 
                            className="blue-btn noticias-novidades--btn" 
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default NoticiasNovidades;