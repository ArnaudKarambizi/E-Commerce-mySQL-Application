require("dotenv").config();
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

// first create your database and table and populate
// it with some data
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecommerceSite_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

app.get("/api/products", (req, res) => {
    let sql = "SELECT * FROM products";
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get("/api/productfilter/:query", (req, res) => {
    let sql = "SELECT * FROM products";
    let query = req.params.query;

    connection.query(sql, (err, results) => {
        if (err) throw err;
        let products = JSON.stringify(results);
        let productsArray = JSON.parse(products);
        let filterResults = productsArray.filter(product => {
            for (const key in product) {
                if (product.hasOwnProperty(key)) {
                    const productValue = product[key];
                    if (productValue == query) {
                        return product;
                    }
                }
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
