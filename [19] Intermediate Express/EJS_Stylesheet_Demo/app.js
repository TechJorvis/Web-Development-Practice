var express = require('express');
var ip = require('ip');

var app = express();

app.get("/", function(req, res) {
    res.send("Welcome to the homepage!");
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});