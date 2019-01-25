const express = require('express');
const ip = require('ip');

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Working!");
});

// Start the server
app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});