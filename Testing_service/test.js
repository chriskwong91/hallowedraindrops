var Mocha = require('mocha');
var Chai = require('chai');
var Test = Mocha.Test;
var expect = Chai.expect;
var should = Chai.should;

var methodMap = require('./mappedMethod.js');

// console.log(req.body);
// res.send('ok');
var mochaInstance = new Mocha();
// var dArr = req.body.dArr;
// make sure userFunction is named 'fn'
// expected example: var fn = eval(req.body.userFunction);

var wrapper = function(item){
  console.log('hello', item, eval(item))
  return eval('(' + item + ')');
}

var Describe = function(describe) {
  this.description = describe.description;
  this.itsArr = describe.itsArr;
};

var It = function(it) {
  this.description = it.description;
  this.method = it.method;
  this.ans = it.ans;
  this.snippet = it.snippet;
};

var dArr = [],
   itsArr;

for (var i = 0; i < 10; i++){
 itsArr = [];
 for (var j = 0 ; j < 5; j++){
   itsArr.push(new It({description: "it test" + j, method: 'shouldEqual', snippet: '4', ans: '4'}));
 }
 dArr.push(new Describe({itsArr: itsArr, description: "hello" + i}));
}


dArr.forEach(function(dObj){
  var suiteInstance = Mocha.Suite.create(mochaInstance.suite, dObj.description);
  dObj.itsArr.forEach(function(itObj){
    suiteInstance.addTest(new Test(itObj.description, function(){
      methodMap[itObj.method](wrapper(itObj.snippet), wrapper(itObj.ans));
    }));
  });
});

mochaInstance.run(function(num_of_errs){
  console.log(num_of_errs);
});