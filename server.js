var http = require("http");
var url = require('url');
var fs = require("fs");
var query = require('querystring');
var path = require('path');
const basePath = __dirname;
var assets = path.join(basePath,'public');


const server = http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		var filePath = '.' + parUrl.pathname;


function start(res) {
  console.log("Request handler 'start' was called.");
  
}



// Serving pages

		if(parUrl.pathname === ('/')){
			var body = fs.readFileSync('./public/index.html', 'utf8');
    		res.writeHead(200, {"Content-Type": "text/html"});
    		res.write(body);
    		res.end();
	  } else if (parUrl.pathname === ('/add')){ 
	    	res.writeHead(200, { 'Content-Type': "application/json" });
	    	console.log(req.query)
			res.end(JSON.strinify(data))
	  } else {
			res.writeHead(404, { 'Content-Type': "text/plain" });
			res.write("Sorry! Something went wrong. Please Try again later")
			res.end()
	  }
	}) 
 

	server.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});
// localhost:8080/email/name?email=ted@jones.com&name=john
// uri encoded 



		// if (parUrl.pathname === ('/email/show')){
		// 	res.writeHead(200, { 'Content-Type': "application/json", "access-control-allow-origin": '*' });
		
		// // Veronica's team will make the db.js file
		// 	db.getEmail().then( function(result){
		// 		res.write(result);
		// 		res.end();
		// 	}).catch(console.log)
		
		// }  
		// 	else if (parUrl.pathname === ('/email/name')){ 
	 //    	parUrl.query === ('/email/name'){
		// 	res.writeHead(200, { 'Content-Type': "application/json" });
		// 	var url = new Uri.Query
		// 	res.render(url)
		// 	var emails = {
		// 		  email: "snowTiger@gmail.com",
		// 		  name: "Timmy Jones"
		// 		}
		// 		res.end(JSON.stringify(emails));
		//     }
		// }    




		
