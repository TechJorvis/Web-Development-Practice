const express = require('express');
const request = require('request');

const app = express();

app.get('/', function(req, res) {
    res.send("Welcome to the Movie API app hompage");
});

const port_nbr = 3000;
app.listen(port_nbr, function() {
    console.log("Server is serving at port: " + port_nbr);
})