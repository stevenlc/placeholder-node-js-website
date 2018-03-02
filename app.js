var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.listen("7000", process.env.IP, function() {
    console.log("Server for placeholder nodeJS website started.");
});
