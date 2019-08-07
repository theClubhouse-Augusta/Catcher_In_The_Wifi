The request is used to return the non string value. I is designed to  call query "string", body and http headers and ect..


GET is another form of require and it is faster.
req.get()
req.get('Content-Type');
// => "text/plain"

example of require:
const request = new Request('https://developer.mozilla.org/en-US/docs/Web/API/Node');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;