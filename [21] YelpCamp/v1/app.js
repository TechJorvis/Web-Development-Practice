const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Site under Construction");
});

const port_nbr = 3000;
app.listen(port_nbr, function() {
    console.log("Server started serving at: " + port_nbr);
});