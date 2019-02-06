const express = require('express');
const ip = require('ip');

var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.send("Connected!");
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});