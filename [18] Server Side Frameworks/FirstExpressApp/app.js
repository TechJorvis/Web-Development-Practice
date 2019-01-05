var express = require('express');
var ip = require('ip');

var app = express();

// "/" => "Hi"
app.get("/", function(req, res) {
    res.send("Hi There!");
});

// "/bye" => Goodbye!
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// "/dog" => "MEOW"
app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

// If invalid page is requested
app.get("*", function(req, res) {
    res.send("PAGE NOT FOUND");
});

// Tell Express to listen for requests (start server)
app.listen(3000, ip.address, function() {
    console.log("Server has at: " + ip.address() + ":3000");
});