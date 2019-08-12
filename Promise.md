#Documentation on Promises

- Promises are used to handle asynchronous operations in JavaScript. 

- They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

- A promise can be created using Promise constructor.

- Then() is used when promise is either resolved or rejected.

- Then() method takes two functions as parameters.

- First function is executed if promise is resolved and a result is received.

- Second function is executed if promise is rejected and an error is received. 

```javascript
var promise = new Promise(function(resolve, reject){
     //do something
});
```

*example:*
```javascript
var promise = new Promise(function(resolve, reject) { 
const x = "geeksforgeeks"; 
const y = "geeksforgeeks"
if(x === y) { 
	resolve(); 
} else { 
	reject(); 
} 
}); 

promise. 
	then(function () { 
		console.log('Success, You are a GEEK'); 
	}). 
	catch(function () { 
		console.log('Some error has occured'); 
	}); 
```