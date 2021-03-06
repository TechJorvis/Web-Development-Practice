var express = require('express');
var ip = require('ip');

var app = express();

app.get("/", function(req, res) {
    res.send("Welcome to homepage!");
});

app.get("/posts", function(req, res) {
    let posts = [
        {title: "GraphQL", author: "John"},
        {title: "Java", author: "Johsh"},
        {title: "NodeJS", author: "Ben"}
    ];

    res.render("posts.ejs", {posts: posts});
});

app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});