var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function(req, res) {
	res.send("hello world");

});

app.get("/moar_cookie", function(req, res) {
	res.cookie("wdi", 21);
	res.send("Check your Cookies");

})

app.get("/sad_cookie", function(req, res) {
	var val = req.cookies.wdi;
	console.log(val, typeof(val));

	res.clearCookie("wdi", 21);
	res.send("Error! No Cookies, Its all GONE!!");
})





app.listen(3000, function(req, res) {
	console.log("Server is Up and Running")
});