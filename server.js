var express = require('express');
var bodyParser = require('body-parser');
	
var app = express();

app.set("port", (process.env.PORT || 9000));


app.use(bodyParser.urlencoded({
	extended: true
}));

var currentMovement = "none";

app.get("/movement", function (req, res) {
	
	//console.log("GET /movement");
	
	res.send(currentMovement);
	
	currentMovement = "none";
	
});

app.post("/movement", function (req, res) {

	//console.log("POST /movement");

	currentMovement = req.body.movement;
	console.log(currentMovement);
	
	res.send("");
});

app.listen((app.get("port"), function() {
	console.log("Server running on port 9000");
})