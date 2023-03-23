import "./BlogPage.css";
import {
    NoticiaLink,
    BlogCard
} from "../components/Imports";
import {useEffect, useState} from "react";

function BlogPage(props) {
    const generateNoticias = props.noticiasList.map((value) => {
        const dateArray = value["Criado_Em"].split("-");
        return (
            <NoticiaLink 
                key={value["Id"]}
                titulo={value["Titulo"]}
                data={dateArray[2].split("T")[0] + "/" + dateArray[1]}
                link={value["Link"]}
            />
        );
    });
    const generateBlogs = props.blogsList.map((value) => 
        <BlogCard 
            key={value["Id"]}
            blogId={value["Id"]}
            img={value["Imagem_Path"]} 
            titulo={value["Titulo"]} 
            altText={value["Imagem_Desc"]} 
            isBlog={true}
        />
    );

    return (
        <div className="container blog-container">

            <BlogHeader
                imgPath={props.blogContent["Imagem_Path"]}
                noticiasList={generateNoticias}
            />
            <BlogContent
                blogsList={generateBlogs}
                titulo={props.blogContent["Titulo"]}
                conteudo={props.blogContent["Texto_Html"]}
            />
            <BlogRecentes
                noticiasList={generateNoticias}
                blogsList={generateBlogs}
            />
        </div>
    );
}

function BlogHeader(props) {
    const [blogImage, setBlogImage] = useState("");

    useEffect(() => {
        if (props.imgPath) setBlogImage(props.imgPath);
    }, [props.imgPath]);

    return (
        <section className="blog-header">
            <img className="blog-header--img" src={blogImage} alt="person writing in a gray ambient" />
            <div className="blog-header--noticias">
                <h3 className="blog-recentes--title">
                    Notícias recentes
                </h3>
                {props.noticiasList}
            </div>
        </section>
    );
}

function BlogContent(props) {
    return (
        <section className="blog-content">
            <div className="blog-content--left">
                <h2 className="blog-content--title">{props.titulo}</h2>
                <hr className="blog-content--hr" />
                <div className="blog-content--left--conteudo" dangerouslySetInnerHTML={{__html: props.conteudo}}></div>
            </div>
            <div className="blog-content--right">
                <h3 className="blog-recentes--title">Artigos Recentes</h3>
                { props.blogsList }
            </div>
        </section>
    );
}

function BlogRecentes(props) {
    return (
        <section className="blog-recentes">
            <h3 className="blog-recentes--title">Recentemente Adicionados</h3>
            <div className="blog-recentes--content">
                {props.blogsList}
                <div className="blog-recentes--noticias">
                    {props.noticiasList}
                </div>
            </div>
        </section>
    );
}

export default BlogPage;