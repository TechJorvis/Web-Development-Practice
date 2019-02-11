const express = require('express');
const request = require('request');

const app = express();

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("index");
});

app.get("/results", function (req, res) {
    let query = req.query.search;
    let url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {
                data: data
            });
        }
    });
});

const port_nbr = 3000;
app.listen(port_nbr, function () {
    console.log("Server is serving at port: " + port_nbr);
})