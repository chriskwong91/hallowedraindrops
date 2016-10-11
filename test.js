var dArr = [];
var itsArr = [];

itsArr.push(new It({
  description:'shouldExist',
  method: 'shouldExist',
  ans: 'undefined',
  snippet: '[1]' 
}));

itsArr.push(new It({
  description:'shouldNotExist',
  method:'shouldNotExist',
  ans: 'undefined',
  snippet: 'var b'
}));

itsArr.push(new It({
  description:'shouldThrowError',
  method:'shouldThrowError',
  ans: 'undefined',
  snippet: 'xxxxxx.xxxx.xxx.xxx[1]'
}));

itsArr.push(new It({
  description:'shouldNotThrowError',
  method:'shouldNotThrowError',
  ans: 'undefined',
  snippet: '1'
}));

itsArr.push(new It({
  description:'shouldEqual',
  method:'shouldEqual',
  ans: '1',
  snippet: '1' 
}));

itsArr.push(new It({
  description:'shouldNotEqual',
  method:'shouldNotEqual',
  ans:'0',
  snippet:'1'
}));

itsArr.push(new It({
  description:'deepEqual',
  method:'deepEqual',
  ans:'{description:"hello",hello:"world"}',
  snippet:'{description:"hello",hello:"world"}'
}));

itsArr.push(new It({
  description:'isAString',
  method:'isAString',
  ans: 'undefined',
  snippet: '"hello"'
}));

itsArr.push(new It({
  description:'isAnArray',
  method:'isAnArray',
  ans: 'undefined',
  snippet: '[1]'
}));

itsArr.push(new It({
  description:'isAnObject',
  method:'isAnObject',
  ans: 'undefined',
  snippet: '{1:1}'
}));

itsArr.push(new It({
  description:'isANull',
  method:'isANull',
  ans: 'undefined',
  snippet: 'null'
}));

itsArr.push(new It({
  description:'isAUndefined',
  method:'isAUndefined',
  ans:'undefined',
  snippet:'undefined'
}));

itsArr.push(new It({
  description:'isAnError',
  method:'isAnError',
  ans:'undefined',
  snippet:'new Error()'
}));

itsArr.push(new It({
  description:'isAPromise',
  method:'isAPromise',
  ans:'undefined',
  snippet:'new Promise()'
}));

itsArr.push(new It({
  description:'isTruthy',
  method:'isTruthy',
  ans:'undefined',
  snippet:'[1]'
}));

itsArr.push(new It({
  description:'isNotTruthy',
  method:'isNotTruthy',
  ans:'undefined',
  snippet:'""'
}));

itsArr.push(new It({
  description:'isTrue',
  method:'isTrue',
  ans:'undefined',
  snippet:'true'
}));

itsArr.push(new It({
  description:'isNotTrue',
  method:'isNotTrue',
  ans:'undefined',
  snippet:'[1]'
}));

itsArr.push(new It({
  description:'isFalse',
  method:'isFalse',
  ans:'undefined',
  snippet:'false'
}));

itsArr.push(new It({
  description:'isNotFalse',
  method:'isNotFalse',
  ans:'undefined',
  snippet:'""'
}));

itsArr.push(new It({
  description:'isUndefined',
  method:'isUndefined',
  ans:'undefined',
  snippet:'undefined'
}));

itsArr.push(new It({
  description:'isNotUndefined',
  method:'isNotUndefined',
  ans:'undefined',
  snippet:'false'
}));

itsArr.push(new It({
  description:'isNull',
  method:'isNull',
  ans:'undefined',
  snippet:'null'
}));

itsArr.push(new It({
  description:'isNotNull',
  method:'isNotNull',
  ans:'undefined',
  snippet:'undefined'
}));

itsArr.push(new It({
  description:'isNaN',
  method:'isNaN',
  ans:'undefined',
  snippet:'"2"'
}));

itsArr.push(new It({
  description:'isNotNaN',
  method:'isNotNaN',
  ans:'undefined',
  snippet:'2'
}));

itsArr.push(new It({
  description:'isExist',
  method:'isExist',
  ans:'undefined',
  snippet:'[1]'
}));

itsArr.push(new It({
  description:'isEmpty',
  method:'isEmpty',
  ans:'undefined',
  snippet:'[]'
}));

itsArr.push(new It({
  description:'isEql',
  method:'isEql',
  ans:'2',
  snippet:'2'
}));

itsArr.push(new It({
  description:'isNotEql',
  method:'isNotEql',
  ans:'1',
  snippet:'2'
}));

itsArr.push(new It({
  description:'isArguments',
  method:'isArguments',
  ans:'undefined',
  snippet:'function(){return arguments}(1,2,3,4,5,6,7)'
}));

itsArr.push(new It({
  description:'isDeeplyEqual',
  method:'isDeeplyEqual',
  ans:'{hello:{hello:1}}',
  snippet:'{hello:{hello:1}}'
}));

itsArr.push(new It({
  description:'isNotDeeplyEqual',
  method:'isNotDeeplyEqual',
  ans:'{hello:{hello:1}}',
  snippet:'{hello:{hello:2}}'
}));

itsArr.push(new It({
  description:'isAbove',
  method:'isAbove',
  ans:'3',
  snippet:'4'
}));

itsArr.push(new It({
  description:'isLess',
  method:'isLess',
  ans:'4',
  snippet:'3'
}));

itsArr.push(new It({
  description:'isAtMost',
  method:'isAtMost',
  ans:'10',
  snippet:'9'
}));

itsArr.push(new It({
  description:'isWithin',
  method:'isWithin',
  ans:'{upper_bound:10, lower_bound:5',
  snippet:'7'
}));

itsArr.push(new It({
  description:'isInstanceof',
  method:'isInstanceof',
  ans:'x',
  snippet:'var x = 2'
}));

itsArr.push(new It({
  description:'isProperty',
  method:'isProperty',
  ans:'attr',
  snippet:'{attr:"yes"}'
}));

itsArr.push(new It({
  description:'isDeepProperty',
  method:'isDeepProperty',
  ans:'deepAttr',
  snippet:'{hello:{goodbye:{why:{are:{you:{still:{here:{deepAttr:"hello world"}}}}}}}'
}));

itsArr.push(new It({
  description:'isWithinLength',
  method:'isWithinLength',
  ans:'{upper_bound:10, lower_bound:5}',
  snippet:'[1,2,3,4,5,6,7,8]'
}));

itsArr.push(new It({
  description:'isBelowLength',
  method:'isBelowLength',
  ans:'10',
  snippet:'[1]'
}));

itsArr.push(new It({
  description:'isAboveLength',
  method:'isAboveLength',
  ans:'2',
  snippet:'[1,2,3]'
}));

itsArr.push(new It({
  description:'isNotLengthOf',
  method:'isNotLengthOf',
  ans:'10',
  snippet:'[1]'
}));

itsArr.push(new It({
  description:'isLengthOf',
  method:'isLengthOf',
  ans:'1',
  snippet:'[1]'
}));

itsArr.push(new It({
  description:'doesNotHaveString',
  method:'doesNotHaveString',
  ans: 'baz',
  snippet: 'foobar'
}));

itsArr.push(new It({
  description:'doesHaveString',
  method:'doesHaveString',
  ans: 'bar',
  snippet: 'foobar'
}));

itsArr.push(new It({
  description:'doesNotContainAllKeys',
  method:'doesNotContainAllKeys',
  ans:, '["rob", "foo"]',
  snippet: '{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesNotContainAnyKeys',
  method:'doesNotContainAnyKeys',
  ans: '"rob"',
  snippet: '{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesContainAllKeys',
  method:'doesContainAllKeys',
  ans: '"foo"',
  snippet:'{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesContainAllKeys',
  method:'doesContainAllKeys',
  ans: '{foo: 1}', // check if it's an array or an obj
  snippet: '{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesContainAnyKeys',
  method:'doesContainAnyKeys',
  ans: '"foo"',
  snippet: '{foo: 1, bar: 2}'
}));

itsArr.push(new It({
  description:'isNotResponding',
  method:'isNotResponding',
  ans: '"fox"',
  snippet: 'obj.baz = function() {}'
}));

itsArr.push(new It({
  description:'isResponding',
  method:'isResponding',
  ans: '"baz"',
  snippet: 'obj.baz = function() {}'
}));

itsArr.push(new It({
  description:'isNotRespondingToItself',
  method:'isNotRespondingToItself',
  ans: '"baz"',
  snippet: '() => { function Foo() {}; \
    Foo.bar = function() {}; \
    Foo.prototype.baz = function() {};\
    return Foo;\
  }'
}));

itsArr.push(new It({
  description:'isRespondingToItself',
  method:'isRespondingToItself',
  ans: '"bar"', // there shouldn't be a 'baz' method
  snippet: '() => { function Foo() {}; \
    Foo.bar = function() {}; \
    Foo.prototype.baz = function() {};\
    return Foo;\
  }'
}));

itsArr.push(new It({
  description:'isSatisfying',
  method:'isSatisfying',
  ans: 'function(num) { return num === 1 }',
  snippet: '1'
}));

itsArr.push(new It({
  description:'isNotSatisfying',
  method:'isNotSatisfying',
  ans: 'function(num) { return num === 1 }',
  snippet: '2' // 2 should never equal 1, so shouldnt' satisfy
}));

itsArr.push(new It({
  description:'isNotCloseTo',
  method:'isNotCloseTo',
  ans: '{numNotSupposedToBeCloseTo: 1, range: 0.5}',
  snippet: '3'
}));

itsArr.push(new It({
  description:'isCloseTo',
  method:'isCloseTo',
  ans: '{numSupposedToBeCloseTo: 1, range: 0.5}',
  snippet: '1'
}));

itsArr.push(new It({
  description:'isNotMembers',
  method:'isNotMembers',
  ans: '[4, 2]',
  snippet: '[4, 2, 5]' 
}));

itsArr.push(new It({
  description:'isMembers',
  method:'isMembers',
  ans: '[4, 2]',
  snippet: '[2, 4]'
}));

itsArr.push(new It({
  description:'isNotExtensible',
  method:'isNotExtensible',
  ans: 'null',
  snippet: 'Object.seal({})' // having it sealed should make it not extensible
}));

itsArr.push(new It({
  description:'isExtensible',
  method:'isExtensible',
  ans: 'null',
  snippet: '{}'
}));

itsArr.push(new It({
  description:'isSealed',
  method:'isSealed',
  ans: 'null',
  snippet: 'Object.seal({})'
}));

itsArr.push(new It({
  description:'isFrozen',
  method:'isFrozen',
  ans: 'null', // should be true since object is frozen
  snippet: 'Object.freeze({})'
}));

dArr.push(new Describe({description:"test of all tests", itsArr:itsArr}));

module.exports = {dArr:dArr};