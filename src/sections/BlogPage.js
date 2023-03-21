import "./BlogPage.css";
import {
    noticiasRow
} from "../sections-data/Imports";
import {
    NoticiaLink,
    BlogCard
} from "../components/Imports";
import Axios from "axios";
import {useState, useEffect} from "react";

function BlogPage(props) {
    const [blogImagem, setBlogImagem] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:3001/blogs/${props.blogId}`).then((response) => {
            const blogContent = response.data[0];

            setBlogImagem(blogContent["Imagem_Path"]);
        });
    }, [props.blogId]);

    return (
        <div className="container blog-container">
            <BlogHeader
                imgPath={blogImagem}
            />
            {/* <BlogContent />
            <BlogRecentes /> */}
        </div>
    );
}

const generateLinks = noticiasRow.linksContent.map((value, index) =>
    <NoticiaLink 
        key={index}
        titulo={value.titulo} 
        data={value.data} 
        link={value.link} 
    />
);

// const generateCards = noticiasRow.cardsContent.map((value, index) =>
//     <BlogCard 
//         key={index}
//         img={value.img}
//         titulo={value.titulo}
//         altText={value.altText}
//         isBlog={true}
//     />
// );

function BlogHeader(props) {
    return (
        <section className="blog-header">
            <img className="blog-header--img" src={require(`../img/${props.imgPath}`)} alt="person writing in a gray ambient" />
            <div className="blog-header--noticias">
                <h3 className="blog-recentes--title">
                    Notícias recentes
                </h3>
                {generateLinks}
            </div>
        </section>
    );
}

function BlogContent() {
    return (
        <section className="blog-content">
            <div className="blog-content--left">
                <h2 className="blog-content--title">Título do Blog</h2>
                <hr className="blog-content--hr" />

                <p className="blog-content--paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Maecenas ac metus a turpis iaculis mattis. 
                    Class aptent taciti sociosqu ad litora torquent 
                    per conubia nostra, per inceptos himenaeos. Vivamus 
                    sem magna, porttitor in mattis id, ultricies non 
                    lacus. Suspendisse vitae eleifend neque, a commodo 
                    dolor. Fusce dapibus justo ut neque accumsan 
                    lobortis. Maecenas tempor sapien nisl, ut iaculis leo 
                    posuere ac. Nam dictum magna et ligula dapibus, vel 
                    pharetra nisi interdum. Proin efficitur, nulla eget 
                    feugiat interdum, velit mi porttitor augue, in 
                    laoreet lorem justo id ipsum.
                </p>
                <p className="blog-content--paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Suspendisse feugiat fermentum neque sed 
                    volutpat. Praesent scelerisque enim ac mauris 
                    ultricies laoreet. Morbi dapibus metus erat, quis 
                    varius risus consequat ut. Praesent non risus 
                    convallis tellus elementum fringilla et vel mi. Ut 
                    laoreet diam pulvinar dapibus rhoncus. Duis feugiat 
                    sollicitudin sapien, sed sodales mauris rhoncus in. 
                    Suspendisse eget ultricies felis. Curabitur eu tellus 
                    eget risus eleifend euismod. Vivamus nibh massa, 
                    tristique nec ligula eu, accumsan gravida urna. 
                    Donec sit amet ligula nec urna pretium malesuada.
                </p>
                <p className="blog-content--paragraph">
                    Aliquam tellus purus, cursus nec dapibus eget, 
                    vehicula eget nibh. Proin faucibus sit amet ante non 
                    condimentum. Aliquam a molestie lorem, at pharetra 
                    arcu. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Curabitur nec mauris diam. Donec et 
                    justo massa. Proin est eros, finibus sit amet mi vel, 
                    aliquam sagittis sem. Nam malesuada nisi nec dui 
                    cursus sollicitudin. 
                </p>
            </div>
            <div className="blog-content--right">
                <h3 className="blog-recentes--title">Artigos Recentes</h3>
                {/* {generateCards} */}
            </div>
        </section>
    );
}

function BlogRecentes() {
    return (
        <section className="blog-recentes">
            <h3 className="blog-recentes--title">Recentemente Adicionados</h3>
            <div className="blog-recentes--content">
                {/* {generateCards} */}
                <div className="blog-recentes--noticias">
                    {generateLinks}
                </div>
            </div>
        </section>
    );
}

export default BlogPage;