
var http = require("http");

var server = http.createServer(function(request, response) {
	
	response.writeHead(200, {"Content-type": "text/plain"});
	
	if (request.method == "GET") {
		if (request.url == "/movement") {
			response.write("None");
		}
	}
	
});

//server.on("connection", function(socket) {
//	socket.write("Hello");
//});

server.listen(8080);