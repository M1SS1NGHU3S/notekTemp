const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.listen(3001, () => {
    console.log("running on port 3001");
});

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "notek"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

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

