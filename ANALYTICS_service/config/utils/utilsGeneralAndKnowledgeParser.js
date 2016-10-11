// Utility that is called within parser.js that provides readability scores
// for GeneralJS and JSKnowledge Tables

module.exports = (code, parser, readability) => {
	for(var i = 0; i < code.length; i++) {
		var codeSplit = code[i].split(' ');
		for(var key in parser) {
			for(var k = 0; k < codeSplit.length; k++) {
				var re = new RegExp(key);
				if(re.exec(codeSplit[k]) !== null){
					parser[key]++;
				}
			}
		}
	}

	// for general, the readability parser is also passed in
	if(readability) {
		readability['function_code_length'] = (parser['function'] * 1.0) / readability['code_length'];
	}

	return parser;
}
