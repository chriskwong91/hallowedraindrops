// Tables that will be imported and used in parser.js

// readabilityJS table requirements
var readability = {
	indentation: null,
	function_code_length: null,
	// repeated_statements: null, // leave for future
	num_comments: null,
	code_length: null,
}

// functionality table requirements
var functionality = {
	speed: null,
	space: null,
};

// generalJS table requirements
var generalJS = {
	// 'for\(': 0, // have 2 instances of this, and re-combine later
	'for ': 0,
	// 'while\(': 0, // 2 spaces and more 
	'while': 0,
	// 'function\(': 0,
	'function': 0,
	'var': 0,
	// 'if\(': 0,
	'if': 0,
	'else': 0,
};

// jsKnowledge table requirements
var jsKnowledge = {
	'forEach': 0,
	'map': 0,
	'filter': 0,
	'reduce': 0,
	'apply': 0,
	'call': 0,
	'bind': 0,
	'arguments': 0,
	'push': 0,
	'pop': 0,
	'slice': 0,
	'splice': 0,
	'shift': 0,
	'unshift': 0,
	'sort': 0,
	'reverse': 0,
	'length': 0,
};

module.exports = {
	readability: readability,
	functionality: functionality,
	generalJS: generalJS,
	jsKnowledge: jsKnowledge,
}