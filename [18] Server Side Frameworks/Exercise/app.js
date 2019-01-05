var express = require('express');
var ip = require('ip');

var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    let animals = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        snowy: "Koi Kaam Dhanda Nhi Hai Kya Tujhe",
        tom: "MEOW!!"
    }

    let animal = req.params.animal;

    res.send("<h1 style=\"font-size: 90px\">The " + animal + " says " + "'" + animals[animal] + "'</h1>");
});

app.get("/repeat/:str/:freq", function(req, res) {
    let str = req.params.str;
    let frequency = parseInt(req.params.freq);
    let response = "";
    for (let i = 0; i < frequency; i++) {
        response += str;
        if (i < frequency - 1) {
            response += " ";
        }
    }
    res.send(response);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

// Start server
app.listen(3000, ip.address, function() {
    console.log("Server started at: " + ip.address() + ":3000");
})