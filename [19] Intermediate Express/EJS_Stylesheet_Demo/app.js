var express = require('express');
var ip = require('ip');

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Welcome to the homepage!");
});

app.get("/posts", function(req, res) {
    let anime_list = [
        {anime: "boruto", type: "ninja"},
        {anime: "dragon ball", type: "martial arts"},
        {anime: "fairy tail", type: "magic/adventure"}
    ];

    res.render("posts", {anime_list: anime_list});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});