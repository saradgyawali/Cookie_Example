var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function(req, res) {
	res.send("Hello World");

});

app.listen(3000, function(req, res) {
	console.log("Server is Up and Running")
});