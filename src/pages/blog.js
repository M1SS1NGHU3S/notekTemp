import BlogPage from "../sections/BlogPage";
import { useParams } from "react-router-dom";

function Blog() {
    const blogId = useParams();

    return (
        <BlogPage blogId={blogId.id} />
    );
}

export default Blog;