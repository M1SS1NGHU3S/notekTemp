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
    const sqlSelect = "SELECT * FROM blog";
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

app.get("/noticias", (req, res) => {
    const sqlSelect = "SELECT * FROM noticia";
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err);

        res.send(result);
    });
});