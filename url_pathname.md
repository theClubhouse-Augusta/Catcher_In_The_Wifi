URL module provides utilities for URL resolution and parsing.
example:const url = require('url');


-The URL string is a well structured string containing multiple components. When it is parsed the URL object returns with the properties of each components.

-UrlPathname uses <string> and invalid URL characters included in the value assigned to pathname are percent-encoded. The pathname sets or returns the pathname of a URL.

We Return the path name of the current URL:

var x = location.pathname;

example:
const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
// Prints /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
// Prints https://example.org/abcdef?123