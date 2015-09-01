var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function(req, res) {
	res.send("hello world");

});

// Set a cookie in the HTTP Resonse Header with a key of "wdi" and value of 21 whenever you hit /moar_cookie. See res.cookie.
// Next, hit your endpoint. From inside your route, can you read the incoming cookies and console.log them?
// How would you get the value associated with wdi?
// What datatype is it? Can you prove it?

app.get("/moar_cookie", function(req, res) {
	res.cookie("wdi", 21);
	res.send("Check your Cookies");

})

// Remove the "wdi" cookie from the HTTP Response Header whenever you hit /sad_cookie. See res.clearCookie
app.get("/sad_cookie", function(req, res) {
	var val = req.cookies.wdi;
	console.log(val, typeof(val));

	res.clearCookie("wdi", 21);
	res.send("Error! No Cookies, Its all GONE!!");
})

// Let's see if we can count the number of times someone has come to the site, using a cookie. First, set a cookie. Then, update the cookie each time you visit "/", incrementing the number by 1.
app.get("/", function(req, res) {
	var count = req.cookies.count;
	res.cookie("count", count+1);
	res.send(count+1)
})




app.listen(3000, function(req, res) {
	console.log("Server is Up and Running")
});