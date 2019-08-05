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

function getCaughtData(){
    connection.connect(function(err) {
        if(err) throw err;
        connection.query("SELECT * FROM caughtInfo", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        })
    }) 
}

function insertCaughtData(email) {
    connection.connect(function(err) {
        if (err) throw err;
     var sql = "INSERT INTO caughtInfo (email) VALUES ('" +email+"')";
     connection.query(sql, function(err, result) {
         if (err) throw err;
         console.log("Email entered")
     })
    })
}
getCaughtData();
insertCaughtData();