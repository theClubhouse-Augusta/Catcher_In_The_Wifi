The http "request" is sent from the client side (browser) that is sent to the server.  There are several types of http request: 

GET request is used to require data from the server. The query string name/value pairs is sent in a URL in a GET request.


example:
        req.get()
        req.get('Content-Type');
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

        
       
POST is used to send data to a server to create or update a resource.





example of require:
const request = new Request('https://developer.mozilla.org/en-US/docs/Web/API/Node');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
