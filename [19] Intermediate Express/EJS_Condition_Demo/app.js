var express = require('express');
var ip = require('ip');

var app = express();

app.get("/", function(req, res) {
    res.send("Welcome to the homepage!");
});

app.get("/anime/:anime", function(req, res) {
    let anime = req.params.anime;
    res.render("anime.ejs", {anime_name: anime});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});