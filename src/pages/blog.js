import BlogPage from "../sections/BlogPage";
import { useParams } from "react-router-dom";
import Axios from "axios";
import {useState, useEffect} from "react";

function Blog() {
    const blogId = useParams();
    const [blogContent, setBlogContent] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:3001/blogs/${blogId.id}`).then((response) => {
            setBlogContent(response.data);
        });
    }, [blogId.id]);

    return (
        <BlogPage blogId={blogId.id} />
    );
}

export default Blog;