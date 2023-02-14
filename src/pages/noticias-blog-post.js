import { useParams } from "react-router-dom";
import {BlogPost} from "../sections/Imports";

function NoticiasBlogPost() {
    const { id } = useParams();

    return (
        <>
            <BlogPost />
        </>
    );
}

export default NoticiasBlogPost;