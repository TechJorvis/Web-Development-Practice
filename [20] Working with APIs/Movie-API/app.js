const express = require('express');
const request = require('request');

const app = express();

app.get('/', function(req, res) {
    res.send("Welcome to the Movie API app hompage");
});

app.get("/results", function(req, res) {
    request('http://www.omdbapi.com/?s=anime&apikey=thewdb', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let results = JSON.parse(body);
            res.send(results);
        }
    });
});

const port_nbr = 3000;
app.listen(port_nbr, function() {
    console.log("Server is serving at port: " + port_nbr);
})