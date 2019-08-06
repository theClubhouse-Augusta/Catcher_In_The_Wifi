var mysql = require('mysql'),
    config  = require("./config.json"),
    // email = "",
    connection = mysql.createConnection(config.db);



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
        var sql = "INSERT INTO caughtInfo (email) VALUES ('" + email +"')";
        connection.query(sql, function(err, result) {
         if (err) throw err;
         console.log("Email entered")
     })
    })
}
// getCaughtData();
// insertCaughtData(email);

module.exports.getCaughtData = getCaughtData;
module.exports.insertCaughtData = insertCaughtData;