const request = require('request');

var url = "https://www.google.com";

request(url, function(error, response, body) {
    if (error) {
        console.log("Error!");
        console.log(error);
    } else if (response.statusCode == 200) {
        console.log("Success!");
        console.log(body);
    }
});