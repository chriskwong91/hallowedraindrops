
var fs = require('fs'),
    path = require('path'),
    Mocha = require('mocha'),
    MochaJSReporter = require('mocha-js-reporter')(Mocha);
 
// First, you need to define a function to handle your test results 
var mochaCallback = function(testResults) {
  // Do anything you like with the test results here 
  // .. 
  console.log(testResults);
}

var testDir = './test/testSpec.js'

// Then, you need to instantiate a Mocha instance. 
var mocha = new Mocha({
  // Returns a reporter that holds a callback in closure that 
  // is executed on the results of the Mocha tests. 
  reporter: new MochaJSReporter(mochaCallback)
});

mocha.addFile(testDir);
 
// Now, you can run the tests. 
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
});