var Mocha = require('mocha');
var Chai = require('chai');
var Test = Mocha.Test;
var expect = Chai.expect;
var should = Chai.should;
var request = require('request-promise');

var methodMap = require('./mappedMethod.js');
var db_utils = require('./db_utils.js');

var wrapper = function(source_code, item){
  eval(source_code);
  return eval('(' + item + ')');
};


module.exports = {
  testSuite: function(req, res){
    db_utils.getTest(req, res, (entry) => {
      var mochaInstance = new Mocha();
      var dArr = JSON.parse(entry.dArr);
      var passedTests = [],
          failedTests = [],
          triggered = false,
          order_counter = 1;

      var suiteInstance = Mocha.Suite.create(mochaInstance.suite, dArr[0].description || 'test description');
      dArr.forEach(function(dObj){
        dObj.itsArr.forEach(function(itObj){
          suiteInstance.addTest(new Test(itObj.description || 'test description', function(){
            methodMap[itObj.method](wrapper(req.body.code, itObj.snippet), wrapper(req.body.code, itObj.ans));
          }));
        });
      });


      mochaInstance.run()
        .on('pass', function (test) {
          // console.log(test);
          passedTests.push({title:test.title, state: test.state, order_counter: order_counter++});
        })
        .on('fail', function(test, errs){
          failedTests.push({errs:errs, order_counter: order_counter++});
        })
        .on('suite end', function(){
          if (!triggered){
            var tests = JSON.stringify({
              passedTests: passedTests,
              failedTests: failedTests
            });
            res.json(tests);
            passedTests = [];
            failedTests = [];
            triggered = true;
            order_counter = 1;
          }
        })
    });  
  }
}; 