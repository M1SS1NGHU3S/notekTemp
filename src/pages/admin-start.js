import {
    BlogsTable,
    NoticiasTable
} from "../sections/Imports";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


function AdminStart() {
    const navigate = useNavigate();

    const [blogsList, setBlogList] = useState([]);
    const [noticiasList, setNoticiaList] = useState([]);

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/usuarios")
            .then((response) => {
                if (!response.data["isLogged"]) {
                    navigate("/admin/login");
                }
            });

        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogList(response.data);
        });
        Axios.get("http://localhost:3001/noticias").then((response) => {
            setNoticiaList(response.data);
        });
    }, [navigate]);

    return (
        <div className="container admin-start--container">
            <BlogsTable blogsList={blogsList} />
            <NoticiasTable noticiasList={noticiasList} />
        </div>
    );
}

export default AdminStart;