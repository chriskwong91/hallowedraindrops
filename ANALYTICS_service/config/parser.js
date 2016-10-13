// Parser to help parse the files

/* NOTES NOTES NOTES: 
	- we can parse further if in our "cleanCode" fn we cut out all lines ending in: ')', '}'
	- ^^ more important... since we are devoting a lot of run-time per item while parsing
  - for generalJS, we are removing all instances where the '(' is used and required
	- In the future refactor, we need to separate the logic into different files
	- Need to send the code into utilsFunctionality.js
*/

// a file containing all of our parserTables
var parser = require('./utils/parserTables.js');
// parser.readability
// parser.functionality
// parser.generalJS
// parser.jsKnowledge

module.exports = (req, username, problem) => {

	// set everything up in here with promises to have them all run in order
	var code = req;

	// require in the utilsReadability.js
	var readability = require('./utils/utilsReadability.js')(code.code, parser.readability);

	// commentsFilteredCode is an array of arrays with comments all filtered out
	var commentsFilteredCode = readability.code;

	var functionality = require('./utils/utilsFunctionality.js')(code.code, parser.functionality);

	var general = require('./utils/utilsGeneralAndKnowledgeParser.js')(commentsFilteredCode, parser.generalJS, parser.readability); 

	var knowledge = require('./utils/utilsGeneralAndKnowledgeParser.js')(commentsFilteredCode, parser.jsKnowledge);

	// return back the parserResults to be put into the db
	return parserResults = {
		general: general,
		knowledge: knowledge,
		readability: readability.parser,
		functionality: functionality,
	};
};





