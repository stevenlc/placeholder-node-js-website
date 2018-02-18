var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.listen("5000", process.env.IP, function() {
    console.log("SERVER for placeholder HAS STARTED.");
});
