const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.listen(3001, () => {
    console.log("running on port 3001");
});

const bcrypt = require('bcrypt');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "notek"
});

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    key: "userId",
    secret: "Xs2s3#fR}$d~-$Nc",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 30,
    }
}));


app.post("/usuarios", (req, res) => {
    const usuarioName = req.body.usuarioName;
    const password = req.body.password;

    const sqlSelect = "SELECT (Senha) FROM usuario WHERE Nome=?";
    db.query(sqlSelect, usuarioName,
        (err, result) => {
            if (err) res.send(err);
    
            bcrypt.compare(password, result[0]["Senha"], (err, response) => {
                if (response) {
                    req.session.user = result;
                    res.send(true);
                } 
                else res.send(false);
            });
        }
    );
});

app.get("/usuarios", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true})
    } 
    else {
        res.send({loggedIn: false})
    }
});

app.get("/blogs", (req, res) => {
    const sqlSelect = "SELECT * FROM blog ORDER BY Criado_Em DESC";
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err);
        
        res.send(result);
    });
});

app.get("/blogs/:blogId", (req, res) => {
    const sqlSelect = `SELECT * FROM blog WHERE Id = ${req.params["blogId"]}`;
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});

app.post("/blogs-add", (req, res) => {
    const blogTitle = req.body.blogTitle;
    const blogDescription = req.body.blogDescription;
    const blogImageUrl = req.body.blogImageUrl;
    const blogImageDesc = req.body.blogImageDesc;
    const blogTextHtml = req.body.blogTextHtml;
    const blogDate = req.body.blogDate;

    const sqlInsert = "INSERT INTO blog (Titulo, Descricao, Texto_Html, Imagem_Path, Imagem_Desc, Criado_Em) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [blogTitle, blogDescription, blogTextHtml, blogImageUrl, blogImageDesc, blogDate], (err, result) => {
        if (err) console.log(err);

        res.send(result);
    });
});

app.delete("/blogs-delete/:blogId", (req, res) => {
    const sqlDelete = "DELETE FROM blog WHERE Id=?";
    db.query(sqlDelete, req.params["blogId"], (err, result) => {
        if (err) console.log(err);

        res.send(result);
    })
});

app.put("/blogs-update", (req, res) => {
    const blogId = req.body.blogId;
    const blogTitulo = req.body.blogTitulo;
    const blogDescricao = req.body.blogDescricao;
    const blogConteudo = req.body.blogConteudo;
    const blogImagem = req.body.blogImagem;
    const imagemDescricao = req.body.imagemDescricao;

    const sqlUpdate = "UPDATE blog SET Titulo=?, Descricao=?, Texto_Html=?, Imagem_Path=?, Imagem_Desc=? WHERE Id=?";
    db.query(
        sqlUpdate,
        [blogTitulo, blogDescricao, blogConteudo, blogImagem, imagemDescricao, blogId],
        (err, result) => {
            if (err) console.log(err);

            res.send(result);
        }
    )
});

app.get("/noticias", (req, res) => {
    const sqlSelect = "SELECT * FROM noticia ORDER BY Criado_Em DESC";
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err);

        res.send(result);
    });
});

app.get("/noticias/:noticiaId", (req, res) => {
    const sqlSelect = "SELECT * FROM noticia WHERE Id=?";
    db.query(sqlSelect, req.params["noticiaId"], (err, result) => {
        if (err) console.log(err);

        res.send(result);
    })
});

app.post("/noticias-add", (req, res) => {
    const noticiaTitle = req.body.noticiaTitle;
    const noticiaLink = req.body.noticiaLink;
    const noticiaDate = req.body.noticiaDate;

    const sqlInsert = "INSERT INTO noticia (Titulo, Criado_Em, Link) VALUES (?,?,?)";
    db.query(sqlInsert, [noticiaTitle, noticiaDate, noticiaLink], (err, result) => {
        if (err) console.log(err);

        res.send(result);
    })
});

app.delete("/noticias-delete/:noticiaId", (req, res) => {
    const noticiaId = req.params["noticiaId"];
    const sqlDelete = "DELETE FROM noticia WHERE Id=?";
    db.query(sqlDelete, noticiaId, (err, result) => {
        if (err) console.log(err);
        
        res.send(result);
    })
});

app.put("/noticias-update", (req, res) => {
    const noticiaId = req.body.noticiaId;
    const noticiaTitulo = req.body.noticiaTitulo;
    const noticiaData = req.body.noticiaData;
    const noticiaLink = req.body.noticiaLink;

    const sqlUpdate = "UPDATE noticia SET Titulo=?, Criado_Em=?, Link=? WHERE Id=?";
    db.query(
        sqlUpdate, 
        [noticiaTitulo, noticiaData, noticiaLink, noticiaId],
        (err, result) => {
            if (err) console.log(err);

            res.send(result);
        }
    );
});