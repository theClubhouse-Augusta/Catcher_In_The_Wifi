"use strict"
function getCaughtData(){
    var connection = mysql.createConnection(config.db);
    connection.connect(function(err) {
        if(err) throw err;
        connection.query("SELECT * FROM caughtInfo", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            connection.end(); // close the connection
        })
    }) 
}

getCaughtData();