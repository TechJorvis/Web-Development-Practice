var express = require('express');
var ip = require('ip');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var anime = ['boruto', 'dragon ball', 'dragon ball z', 'dragon ball super', 'dragon ball gt'];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addAnime", function(req, res) {
    let newAnime = req.body.newAnime;
    anime.push(newAnime);
    res.redirect("/anime");
});

app.get("/anime", function(req, res) {
    res.render("anime", {anime_list: anime});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});