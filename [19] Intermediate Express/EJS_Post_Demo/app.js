var express = require('express');
var ip = require('ip');
var bodyParser = require('body-parser');

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addAnime", function(req, res) {
    console.log(req.body);
    res.send("You have reached the post route");
});

app.get("/anime", function(req, res) {
    var anime = ['boruto', 'dragon ball', 'dragon ball z', 'dragon ball super', 'dragon ball gt'];
    res.render("anime", {anime_list: anime});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});