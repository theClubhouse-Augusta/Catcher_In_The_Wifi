function insertCaughtData(email) {
    var connection = mysql.createConnection(config.db);
    connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO caughtInfo (email) VALUES ('" + email +"')";
        connection.query(sql, function(err, result) {
         if (err) throw err;
         console.log("Email entered");
         connection.end(); // close the connection
     })
    })
}

insertCaughtData(email);