The http "request" method indiicates the method to be preformed on the resource identified by the given "Request-URI". The method is case sesitive and should be mentioned, the following are methods suported in HTTP/1.1:

 
GET request untilizes the query string name/value pairs sent in a URL to comunicate with the server.

example:

var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://samwize.com',
    method: 'GET',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})

The next request is HEAD, the HEAD method is the same as the GET, but transfers the status line in the header section only. "example above"
             
The next request is POST:
 A POST is used to send data to a server to create or update a resource.


example of require:
const request = new Request('https://developer.mozilla.org/en-US/docs/Web/API/Node');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

