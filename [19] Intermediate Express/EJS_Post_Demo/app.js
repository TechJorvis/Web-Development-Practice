var express = require('express');
var ip = require('ip');

var app = express();

app.set("view engine", "ejs");

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});