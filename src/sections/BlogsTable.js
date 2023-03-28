import "./BlogsTable.css"
import Button from "react-bootstrap/Button";
import Axios from "axios";

function BlogsTable(props) {
    const deleteRow = function (id) {
        if(window.confirm("Você tem certeza que quer deletar essa notícia?")) {
            Axios.delete(`http://localhost:3001/blogs-delete/${id}`).then(() => window.location.reload());
        }
    };
    
    const generateRows = props.blogsList.map((value) =>
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
        <section className="blogs-table">
            <h2 className="blogs-table--title">Blogs</h2>
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
            <Button href="/admin/add-blog" variant="info" className="crud-table--create">
                Criar Blog
            </Button>
        </section>
    );
}

export default BlogsTable;