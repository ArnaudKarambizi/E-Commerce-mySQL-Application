/*==== LOADING .ENV FILE WITH PASSWORD CREATED IN THE ROOT DIRECTORY */

require("dotenv").config();

/* ACCESSING MySQL database with Node.js IMPORTING a MySQL driver IN THE SERVER FILE*/

let mysql = require("mysql");
const PORT = 5000;
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.use(morgan("common"));
app.use(helmet());

/*CREATING A VARIABLE  NAMED CONNECTION */

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    /*PROCESS.ENV OBJECT*/

    password: process.env.MYPASSWORD,
    database: "ecommerceSite_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

//connection.end();

/************* =====API ENDPOINTS ====== */

app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});
app.get("/api/products", (req, res) => {
    let sql = "SELECT * FROM products";

    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

/*FETCHING PRODUCTS DATA FROM MYSQL DATABASE USING  THE GET METHOD */

app.get("/api/productFilter/:query", (req, res) => {
    let sql = "SELECT * FROM products";
    let query = req.params.query;

    connection.query(sql, (err, results) => {
        if (err) throw err;
        let products = JSON.stringify(results);
        let productsArray = JSON.parse(products);
        let filterResults = productsArray.filter(product => {
            if (
                product.ProductName.toLowerCase().includes(query.toLowerCase())
            ) {
                return product;
            }
        });
        res.send(filterResults);
    });
});

app.get("/api/contacts", (req, res) => {
    let sql = "SELECT * FROM contacts";
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}!`);
});
/*======= EXPORTING  EXPRESS APP  TO TEST.JS ====*/

module.exports = app;
