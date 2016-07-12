//
//var http = require("http");
//
//var server = http.createServer(function(request, response) {
//	
//	response.writeHead(200, {"Content-type": "text/plain"});
//	
//	var currenteMovement = "none";
//	
//	if (request.method == "GET") {
//		if (request.url == "/movement") {
//			response.write(currenteMovement);
//		}
//	}
//	else if (request.method == "POST") {
//		if (request.url == "/movement") {
//			currentMovement = 
//		}
//	}
//	
//});
//
////server.on("connection", function(socket) {
////	socket.write("Hello");
////});
//
//server.listen(8080);
//	

var express = require('express');
var bodyParser = require('body-parser');
	
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

var currentMovement = "none";

app.get("/movement", function (req, res) {
	
	console.log("GET /movement");
	
	res.send(currentMovement);
	
	currentMovement = "none";
	
});

app.post("/movement", function (req, res) {

	console.log("POST /movement");

	currentMovement = req.body.movement;
	console.log(currentMovement);
	
	res.send("");
});

app.listen(9000, function() {
	console.log("Server running on port 9000");
})