import "./BlogPost.css";
import { blogPostImg1 } from "../img/Imports";

function BlogPost() {
    return (
        <section className="blog-post">
            <div className="blog-post--container container">
                <div className="blog-post--left">
                    <img 
                        className="blog-post--img" 
                        alt="Person Writing" 
                        src={blogPostImg1} 
                    />
                </div>
                <div className="blog-post--right">
                    <h1>Hi</h1>
                </div>
            </div>
        </section>
    )
}

export default BlogPost;