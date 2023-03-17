import "./BlogPage.css";
import {
    noticiasRow
} from "../sections-data/Imports"

function BlogPage(props) {
    return (
        <BlogHeader />
    );
}

function BlogHeader() {
    return (
        <section className="blog-header">
            <div className="blog-header--noticias">
                <h3 className="blog-header--noticias-title">
                    Notícias recentes
                </h3>
                {noticiasRow.generateLinks}
            </div>
        </section>
    );
}

export default BlogPage;