const path = require('path')
const express = require("express");
const db = require("./db.js");


const app = express();
const publicDirectory = path.join(__dirname, '../public')


app.use(express.static(publicDirectory))


app.get('/add', (req, res) => {
	var emailMe =  req.query.email;
    var event = req.query.event;

    // I only want to insert email if value is not null

    if (emailMe !== null){
       db.insertCaughtData(emailMe)
    };

    // After inserting data, I want to redirect to empty input box 
    res.redirect('');
})

app.get('/snow/dog', (req, res) => {

 	// We can console log data, but I want to render database at url /snow/dog
		console.log(db.getCaughtData());
})

	// Still need 404



app.listen(8080, () => {
	console.log("Listening On Port 8080")
}) 