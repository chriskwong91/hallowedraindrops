// Fill in the attributes within the Functionality Table

module.exports = function (code, parser) {

	var getSpeed = function (input_code) {
		var fn = function(input_code) { 
			return eval('(' + input_code + ')');
		};

		var startTime = (new Date()).getTime();

		for(var i=0;i<1000;i++) {
	    fn();
		}
		var endTime = (new Date()).getTime();
		var diffTime = endTime - startTime;

		parser.speed = diffTime;

		// below is a better way, but not sure how to pull value out of 
		// console.time and console.timeEnd()
		// http://stackoverflow.com/questions/10617070/how-to-measure-execution-time-of-javascript-code-with-callbacks
	};

	var getSpace = (code) => {
		parser.space = code.length;
	};

	// sets the parser.speed through the run in getSpeed
	getSpeed(code);

	// sets the parser.space through the run in getSpace
	getSpace(code);

	return parser;
}; 