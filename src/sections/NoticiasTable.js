import "./NoticiasTable.css";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function NoticiasTable(props) {
    const deleteRow = function (id) {
        if(window.confirm("Você tem certeza que quer deletar essa notícia?")) {
            Axios.delete(`http://localhost:3001/noticias/delete/${id}`).then(() => window.location.reload());
        }
    };

    const generateRows = props.noticiasList.map((value) =>
        <tr key={value["Id"]}>
            <td>{value["Id"]}</td>
            <td>{value["Titulo"]}</td>
            <td>{value["Criado_Em"].split("T")[0]}</td>
            <td>
                <Button variant="info" className="crud-table--update">
                    Atualizar
                </Button>
            </td>
            <td>
                <Button onClick={() => deleteRow(value["Id"])} variant="danger" className="crud-table--delete">
                    Deletar
                </Button>
            </td>
        </tr>
    );

    return (
        <section className="noticias-table">
            <h2 className="noticias-table--title">Notícias</h2>
            <table className="crud-table">
                <thead>
                    <tr>
                        <th style={{width: "8%"}}>Id</th>
                        <th style={{width: "50%"}}>Título</th>
                        <th style={{width: "12%"}}>Criado Em</th>
                        <th style={{width: "15%"}}>Atualizar</th>
                        <th style={{width: "15%"}}>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {generateRows}
                </tbody>
            </table>
            <Button variant="info" className="crud-table--create">
                Criar Notícia
            </Button>
        </section>
    );
}

export default NoticiasTable;