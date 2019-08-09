var http = require('http');
var fs = require('fs');
var url = require('url');
var db = require('./db');

var server = http.createServer(function(req, res){
  
    var parUrl = url.parse(req.url, true);
    var pathname = '.';
    res.writeHead(200, {"Content-Type": "application/json", "access-control-allow-origin": "*"});
    console.log('request was made: ' + req.url);

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res); 
    }    
    if (req.url === '/style.css'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/style.css').pipe(res); 
    }
    if (req.url === '/reset.css'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/reset.css').pipe(res); 
    }
  
});
  
server.listen(8080, '127.0.0.1');
console.log('The server is listening on port ' + 8080);