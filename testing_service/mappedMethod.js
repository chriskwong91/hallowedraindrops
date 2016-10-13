var Mocha = require('mocha');
var Chai = require('chai');
var Test = Mocha.Test;
var expect = Chai.expect;   
var should = Chai.should;    

  /*
   * overall: we'll be testing two versions, with
   * the first version being the snippetitted code made
   * by the user, and the second version being the
   * answer pulled from our answers db.
   * 
   * snippet: the input snippetitted by the testee
   * ans : the answer for that question
   *
   * 
   * 
   * All methods will have a "snippet" and "ans" variable
   * 
   * 
  */

  /* Start of the use for 'Should' */
  // snippet should deep equal ans
  // snippet is a type array



  /* need attention:
    -argumnets**
    -within (input needs to be an array(
    -isOwnProperty, ans will need to be a name
    -toHaveOwnPropertyDescriptor is not sure
  */

  
module.exports = {

  /*
   * overall: we'll be testing two versions, with
   * the first version being the snippetitted code made
   * by the user, and the second version being the
   * answer pulled from our answers db.
   * 
   * snippet: the input snippetitted by the testee
   * ans : the answer for that question
  */

  // snippet/ans should exist
  shouldExist : function (snippet, ans) {
    should(snippet).exist;
  },

  // snippet/ans should not exist
  shouldNotExist : function (snippet, ans) {
    should(snippet).not.exist;
  },

  // snippet/ans should Throw
  shouldThrowError : function (snippet) {
    snippet.should.Throw(Error);
  },

  // snippet/ans should not throw
  shouldNotThrowError : function (snippet, ans) {
    should(snippet).not.Throw(Error);
  },

  // snippet should equal ans
  shouldEqual: function (snippet, ans) {
    expect(snippet).to.equal(ans);
  },

  // snippet should not equal ans
  shouldNotEqual: function (snippet, ans) {
    should(snippet).not.equal(ans);
  },

  /* Start of the use for 'Should' */

  // snippet should deep equal ans
  // only takes one nested property.
  deepEqual: function (snippet, ans) {
    expect(snippet).to.deep.equal(ans);
  },
    
  // snippet is a type string
  isAString: function(snippet, ans) {
    expect(snippet).to.be.a('string');
  },
  
  // snippet is a type array
  isAnArray: function(snippet, ans) {
    expect(snippet).to.be.instanceof(Array);
  },
    
  // snippet is a type of object
  isAnObject: function(snippet, ans) {
    console.log('typeof', typeof snippet, 'snipp', snippet);
    expect(snippet).to.be.an('object');
  },
  
  // snippet is a null type
  isANull: function(snippet, ans) {
    expect(snippet).to.be.a('null');
  },
    
  // snippet is an undefined type
  isAUndefined: function(snippet, ans) {
    expect(snippet).to.be.an('undefined');
  },
    
  // snippet is an error type
  isAnError: function(snippet, ans) {
    expect(snippet).to.be.an('error');
  },
    
  // snippet is a promise type
  isAPromise: function(snippet, ans) {
    expect(snippet).to.be.a('promise');
  },

  // snippet is truthy
  isTruthy: function(snippet, ans) {
    expect(snippet).to.be.ok;
  },
  
  // snippet is not truthy
  isNotTruthy: function(snippet, ans) {
    expect(snippet).to.not.be.ok;
  },
  
  // snippet is of the boolean value true
  isTrue: function(snippet, ans) {
    expect(snippet).to.be.true;
  },
    
  // snippet is not of the boolean value true
  isNotTrue: function(snippet, ans) {
    expect(snippet).to.not.be.true;
  },
    
  // snippet is of the boolean value false
  isFalse: function(snippet, ans) {
    expect(snippet).to.be.false;
  },
    
  // snippet is not of the boolean value false
  isNotFalse: function(snippet, ans) {
    expect(snippet).to.not.be.false;
  },
  
  // snippet is of the value undefined
  isUndefined: function(snippet, ans) {
    expect(snippet).to.be.undefined;
  },
  
  // snippet is not of the value undefined
  isNotUndefined: function(snippet, ans) {
    expect(snippet).to.not.be.undefined;
  },
  
  // snippet is of the value null
  isNull: function(snippet, ans) {
    expect(snippet).to.be.null;
  },
  
  // snippet is not of the value null
  isNotNull: function(snippet, ans) {
    expect(snippet).to.not.be.null;
  },
  
  // snippet is NaN (not a number)
  isNaN: function(snippet, ans) {
    expect(snippet).to.be.NaN;
  },
  
  // snippet is not NaN (not a number)
  isNotNaN: function(snippet, ans) {
    expect(snippet).to.not.be.NaN;
  },
  
  // snippet exists
  isExist: function(snippet, ans) {
    expect(snippet).to.exist;
  },
  
  // snippet has the length of 0
  isEmpty: function(snippet, ans) {
    expect(snippet).to.be.empty;
  },
  
  // snippet softly equals ans
  isEql: function(snippet, ans) {
    expect(snippet).to.eql(ans);
  },
  
  // snippet does not softly equal ans
  isNotEql: function(snippet, ans) {
    expect(snippet).to.not.eql(ans);
  },
  
  // snippet is of type argument
  isArguments: function(snippet, ans) {
    expect(snippet).to.be.arguments;
  },
  
  // snippet does deeply equal ans
  // isDeeplyEqual
  isDeeplyEqual: function(snippet, ans) {
    expect(snippet).to.equal(ans);
  },
  
  // snippet does not deeply equal ans
  // isNotDeeplyEqual
  isNotDeeplyEqual: function(snippet, ans) {
    expect(snippet).to.not.equal(ans);
  },
  
  // snippet is above ans
  isAbove: function(snippet, ans) {
    expect(snippet).to.be.above(ans);
  },

  isBelow: function(snippet, ans) {
    expect(snippet).to.be.below(ans);
  },
  
  // snippet is below ans
  // change to isAtLeast
  isAtLeast: function(snippet, ans) {
    expect(snippet).to.be.at.least(ans);
  },
  
  // snippet is less than or equal to ans
  isAtMost: function(snippet, ans) {
    expect(snippet).to.be.at.most(ans);
  },
  
  // snippet is within ans
  isWithin: function(snippet, ans) {
    // ans should be an object that will be an object with 
      // bottom and upper as its keys
    // var bottom = ans[0];
    // var upper  = ans[1];
    expect(snippet).to.be.within(ans[0], ans[1]);
  },
  
  // snippet is instanceof
  isInstanceof: function(snippet, ans) {
    expect(snippet).to.be.an.instanceof(ans);
  },
  
  // snippet is property of
  isProperty: function(snippet, ans) {
    console.log('snipp', snippet)
    expect(snippet).to.have.property(ans);
  },
  
  isDeepProperty: function(snippet, ans) {
  expect(snippet).to.have.deep.property(ans[0], ans[1]);
  },
  
  // snippet has property of ans
  isOwnProperty: function(snippet, ans) {
    expect(snippet).to.have.ownProperty(ans);
  },
  
  // snippet has own property descriptor
  isOwnPropertyDescriptor: function(snippet, ans) {
    expect(snippet).to.have.ownPropertyDescriptor(ans);
    
    // i.e. ans could be:
    // 'length', { enumerable: false, configurable: false, writable: false, value: 4 }
  }

  ,
  isWithinLength: function(snippet, ans){
    /* fn is expecting a lower_bound and an upper_bound*/
    expect(snippet).to.have.length.within(ans[0], ans[1]);
  },

  isBelowLength: function(snippet, ans){
    expect(snippet).to.have.length.below(ans);
  },

  isAboveLength: function(snippet, ans){
    expect(snippet).to.have.length.above(ans);
  },

  isNotLengthOf: function(snippet, ans){
    expect(snippet).to.not.have.lengthOf(ans);
  },

  isLengthOf: function(snippet, ans){
    expect(snippet).to.have.lengthOf(ans);
  },

  willNotMatchRegex: function(snippet, ans){
    expect(snippet).to.not.match(ans);
  },

  // asserts snippet matches regex in ans
  willMatchRegex: function(snippet, ans){
    expect(snippet).to.match(ans);
  },

  // asserts snippet does not contain string in ans
  doesNotHaveString: function(snippet, ans){
    expect(snippet).to.not.have.string(ans);
  },

  // asserts snippet does contain string in ans
  doesHaveString: function(snippet, ans){
    expect(snippet).to.have.string(ans);
  },

  // asserts that the target contains any keys
  doesNotContainAllKeys: function(snippet, ans){
    expect(snippet).to.not.have.all.keys(ans);
  },
  
  // asserts that the target contains any keys
  doesNotContainAnyKeys: function(snippet, ans){
    expect(snippet).to.not.have.any.keys(ans);
  },

  // asserts that the target contains all keys
  doesContainAllKeys: function(snippet, ans){
    expect(snippet).to.have.all.keys(ans);
  },

  // asserts that the target contains any keys
  doesContainAnyKeys: function(snippet, ans){
    expect(snippet).to.have.any.keys(ans);
  },

  // Asserts that the object or class target will respond to a method.
  isNotResponding: function(snippet, ans){
    expect(snippet).to.not.respondTo(ans);
  },

  // Asserts that the object or class target will respond to a method.
  isResponding: function(snippet, ans){
    expect(snippet).to.respondTo(ans);
  },

  // expects a specific instance of a method to not respond 
  isNotRespondingToItself: function(snippet, ans){
    expect(snippet).itself.to.not.respondTo(ans);
  },
  
  // expects a specific instance of a method to respond 
  isRespondingToItself: function(snippet, ans){
    expect(snippet).itself.to.respondTo(ans);
  },

  // Asserts that the target pass a given truth test
  isSatisfying: function(snippet, method){
    expect(snippet).to.satisfy(method);
  },

  // Asserts that the target does not pass a given truth test
  isNotSatisfying: function(snippet, method){
    expect(snippet).to.not.satisfy(method);
  },

  // Asserts that the target pass a given truth test
  isSatisfying: function(snippet, method){
    expect(snippet).to.satisfy(method);
  },

  // asserts that snippet does not fall within delta of expected
  isNotCloseTo: function(snippet, ans){
    expect(snippet).to.not.be.closeTo(ans.numNotSupposedToBeCloseTo, ans.range);
  },

  // asserts that snippet falls within delta of expected
  isCloseTo: function(snippet, ans){
    expect(snippet).to.be.closeTo(ans.numSupposedToBeCloseTo, ans.range);
  },

  // asserts that the target is not a superset of set, or that the target and set do not have the same 
  // strictly equal members
  isNotMembers: function(snippet, ans){
    expect(snippet).to.not.include.members(ans);
  },

  // asserts that the target is a superset of set, or that the target and set have the same strictly
  // equal members
  isMembers: function(snippet, ans){
    expect(snippet).to.include.members(ans);
  },

  // target cannot add new properties to it
  isNotExtensible: function(snippet){
    expect(snippet).to.be.not.extensible;
  },

  // target can add new properties to it
  isExtensible: function(snippet){
    expect(snippet).to.be.extensible;
  },

  // target cannot add new properties and existing cannot be removed.
  isSealed: function(snippet){
    expect(snippet).to.be.sealed;
  },

  // target cannot add new properties and existing cannot be modified
  isFrozen: function(snippet){
    expect(snippet).to.be.frozen;
  }

};
  
