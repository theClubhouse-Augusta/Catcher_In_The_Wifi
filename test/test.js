var db = require("../db.js")
var assert = require('assert');

// describe('getCaughtData', function() {
//   describe('#indexOf()', function() {
//     it('should connect to mysql', function() {
//       assert.strictEqual([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
// var assert = require('assert');
describe('Basic Mocha db test', function () {
 it('should return the result from getCaughtData', function () {
     var result = db.getCaughtData();
        assert.equal(typeof result, 'object');
        
    });
 it('should return Data entered from insertCaughtData', function () {
    var mail = "t@gmail.com";
    var returned = db.insertCaughtData(mail);
        assert.equal(db.insertCaughtData(mail));
        
    });
});
