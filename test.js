//Testing server.js from the develop branch

var server = require("./server");
var assert = require('assert');
http = require('http');

describe('/', function(){
    it('should return 404', function(done){
        http.get('http://www.google.com/rainbdhfjgkjdbgf', function (res){
            assert.equal(404, res.statusCode);
            done();
        });
    });
    it('should return 200', function(done){
        http.get('http://localhost:8080', function (res){
            assert.equal(200, res.statusCode);            
        });
        done();
    });   
  
});

