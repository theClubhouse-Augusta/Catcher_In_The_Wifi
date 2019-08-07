var mysql = require('mysql');
    config  = require("./config.json");


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});