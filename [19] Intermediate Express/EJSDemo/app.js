var express = require('express');
var ip = require('ip');

var app = express();

app.get("/", function(req, res) {
    //res.send("Welcome to the home page!");
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});