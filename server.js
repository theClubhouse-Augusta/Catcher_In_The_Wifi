var http = require("http");
var url = require('url');
var fs = require("fs");
var path = require('path');

const server = http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		var filePath = '.' + parUrl.pathname;




// Serving pages

		if(parUrl.pathname === ('/')){
			fs.readFile("index.html", function (err, content) {
			res.writeHead(200, { 'Content-Type': "text/html" });
			return res.end(content);
		});
		} else if (parUrl.pathname === ('/index.css')){
		fs.readFile("index.css", function(err, content){
			res.writeHead(200, {'content-Type': "text/css"});
			res.end(content);
		});
	    } else if (parUrl.pathname === ('/reset.css')){
		fs.readFile("reset.css", function(err, content){
			res.writeHead(200, {'content-Type': "text/css"});
			res.end(content);
		});
	    } 
		
})

	server.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});


