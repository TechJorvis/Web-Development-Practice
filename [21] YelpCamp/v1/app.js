const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    let campgrounds = [
        {name: "Salmon Creek", image: ""},
        {name: "Granite Hill", image: ""},
        {name: "Dragon Nest", image: ""}
    ];

    res.render("campgrounds");
});

const port_nbr = 3000;
app.listen(port_nbr, function() {
    console.log("Server started serving at: " + port_nbr);
});