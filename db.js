var mysql = require('mysql'),
    config  = require("./config.json"),
    email = "test@gmail.com";
    


function getCaughtData () {
    

    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(config.db);
        connection.connect(function(err){ 
        connection.query("SELECT * FROM caughtInfo", function (err, result) {
            if (err) throw err;
            // console.log("calling inside the function", result);
            resolve(JSON.parse(JSON.stringify(result)));
        })}

    )});
}
getCaughtData().then(result => {console.log(result)});


function insertCaughtData(email) {
    var connection = mysql.createConnection(config.db);
    connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO caughtInfo (email) VALUES ('" + email +"')";
         connection.query(sql, function(err, result) {
         if (err) throw err;
         console.log("Email entered ", email);
         connection.end(); // close the connection
         return "Data entered";
     })
    })
}
// getCaughtData(); //  test call
// insertCaughtData(email); //test call

module.exports.getCaughtData = getCaughtData;
module.exports.insertCaughtData = insertCaughtData;
