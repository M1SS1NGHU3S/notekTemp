import {
    BlogsTable,
    NoticiasTable
} from "../sections/Imports";
import { useEffect, useState } from "react";
import Axios from "axios";


function AdminStart() {
    const [blogsList, setBlogList] = useState([]);
    const [noticiasList, setNoticiaList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogList(response.data);
        });
        Axios.get("http://localhost:3001/noticias").then((response) => {
            setNoticiaList(response.data);
        });
    }, []);

    return (
        <div className="container admin-start--container">
            <BlogsTable blogsList={blogsList} />
            <NoticiasTable noticiasList={noticiasList} />
        </div>
    );
}

export default AdminStart;