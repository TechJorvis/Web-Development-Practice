var express = require('express');
var ip = require('ip');

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/posts", function(req, res) {
    let anime_list = [
        {name: "boruto", type: "ninja"},
        {name: "dragon ball", type: "martial arts"},
        {name: "fairy tail", type: "magic/adventure"}
    ];

    res.render("posts", {anime_list: anime_list});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});