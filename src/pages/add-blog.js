import {AddBlogForms} from "../sections/Imports";
import { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/usuarios")
            .then((response) => {
                if (!response.data["isLogged"]) {
                    navigate("/admin/login");
                }
            });
    }, [navigate]);


    return (
        <AddBlogForms />
    );
}

export default AddBlog;