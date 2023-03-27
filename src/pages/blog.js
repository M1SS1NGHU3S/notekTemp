import BlogPage from "../sections/BlogPage";
import { useParams } from "react-router-dom";
import Axios from "axios";
import {useState, useEffect} from "react";

function Blog() {
    const blogId = useParams();
    const [blogContent, setBlogContent] = useState();
    const [blogsList, setBlogsList] = useState();
    const [noticiasList, setNoticiasList] = useState([]);

    useEffect(() => {
        console.log("in useEffect");
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogsList(response.data);
        });
        Axios.get(`http://localhost:3001/blogs/${blogId.id}`).then((response) => {
            setBlogContent(response.data);
        });
        Axios.get("http://localhost:3001/noticias").then((response) => {
            setNoticiasList(response.data)
        });
    }, [blogId.id]);

    return (
        <BlogPage 
            blogContent={blogContent ? blogContent[0] : {}} 
            noticiasList={noticiasList ? noticiasList : []}
            blogsList={blogsList ? blogsList : []}
        />
    );
}

export default Blog;