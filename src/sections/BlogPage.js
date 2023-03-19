import "./BlogPage.css";
import {
    noticiasRow
} from "../sections-data/Imports";
import {
    NoticiaLink,
} from "../components/Imports";
import {
    blogExample
} from "../img/Imports"

function BlogPage(props) {
    return (
        <div className="container blog-container">
            <BlogHeader />
        </div>
    );
}

function BlogHeader() {
    const generateLinks = noticiasRow.linksContent.map((value, index) =>
        <NoticiaLink 
            key={index}
            titulo={value.titulo} 
            data={value.data} 
            link={value.link} 
        />
    );

    return (
        <section className="blog-header">
            <img className="blog-header--img" src={blogExample} alt="person writing in a gray ambient" />
            
            <div className="blog-header--noticias">
                <h3 className="blog-header--noticias-title">
                    Notícias recentes
                </h3>
                {generateLinks}
            </div>
        </section>
    );
}

export default BlogPage;