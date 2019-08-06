
var http = require("http");
var url = require('url');
var fs = require("fs");
// var parse = require('querystring');
var path = require('path');

const server = http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		var filePath = '.' + parUrl.pathname;

// Handling AJAx Request

// var query = require('querystring').stringify(propertiesObject);
// http.get(url + query, function(res) {
//    console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//     console.log("Got error: " + e.message);
// });


// var params=function(req){
//   let q=req.url.split('?'),result={};
//   if(q.length>=2){
//       q[1].split('&').forEach((item)=>{
//            try {
//              result[item.split('=')[0]]=item.split('=')[1];
//            } catch (e) {
//              result[item.split('=')[0]]='';
//            }
//       })
//   }
//   return result;
// }

// req.params=params(req); // call the function above ;
//       /**
//        * http://mysite/add?name=Ahmed
//        */
//      console.log(req.params.name) ; // display : "Ahmed"

// })

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
	    } if (parUrl.pathname === ('/email/show')){
			res.writeHead(200, { 'Content-Type': "application/json", "access-control-allow-origin": '*' });
			db.getCaughtData().then( function(result){
				res.write(result);
				res.end();
			}).catch(console.log)
		}
		// }  console.log(parUrl.pathname);
		// if(/^(\/email\/event)/.test(parUrl.pathname)){

	
	});
	

	server.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});



		

		

	



 

