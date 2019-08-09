Express is a popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to: 

Write handlers for requests with different HTTP verbs at different URL paths (routes).
Integrate with "view" rendering engines in order to generate responses by inserting data into templates.

Add additional request processing "middleware" at any point within the request handling pipeline.

While Express itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem.

Allows to set up middlewares to respond to HTTP Requests.

Defines a routing table which is used to perform different actions based on HTTP Method and URL.

Allows to dynamically render HTML Pages based on passing arguments to templates.

example:

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
