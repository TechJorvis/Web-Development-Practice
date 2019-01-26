const express = require('express');
const ip = require('ip');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var users = [];

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/addUser", function(req, res) {
    //console.log(req.body);

    // Extract the details of the new user
    let new_user = {};
    new_user.usr_name = req.body.usr_name;
    new_user.email = req.body.email;
    new_user.password = req.body.password;

    // Add the new user in the users list
    users.push(new_user)
    //console.log(users);


});

// Start the server
app.listen(3000, ip.address, function() {
    console.log("Server started serving at: " + ip.address() + ":3000");
});