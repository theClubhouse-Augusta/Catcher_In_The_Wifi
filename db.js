var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Catcher_In_The_Wifi",
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});