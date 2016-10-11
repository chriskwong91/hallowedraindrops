// Utility that is called within parser.js that provides readability scores

module.exports = (code, parser) => {

	// variables needed below
	var len = code.length;
	var numComments = 0;

	/*
	 * @name: countWords
	 * @input: code to parse
	 * @output: sets the code_length property on the passed in parser table
	 * @notes: n/a
	*/

	var countWords = (code) => {
		parser.code_length = code.split(' ').length;
	};

	/* 
	 * @name: countLines
	 * @input: code to parse.
	 * @output: an object that contains the number counts spaces and indents per each line of code as well as an array of the 'code' string cleaned of '' and 'new lines'
	 * @notes: naively works, but if there's even one space in that line, it'll
	 * log it and won't delete it
	*/

	var countLines = (code) => {
		var returnObj = {};
		var copy = code;
		var spaceCounter = [];
		var copyLines = copy.split('\n');

		for(var i = 0; i < copyLines.length; i++) {
			if(copyLines[i][0] === '') {
				// checks if the first character is a new line
				copyLines.splice(i, 1); // remove that index
			}
		}

		// do another round after all '' have been spliced out
		for(var j = 0; j < copyLines.length; j++) {
			// default set the counter_else to 0 if end of line is reached
			var counter_else = 0;
			for(var k = 0; k < copyLines[j].length; k++) {
				if(copyLines[j][k] === ' ') {
					counter_else++;
				} else {
					spaceCounter.push(counter_else);
					counter_else = 0; 
					break;
				}
			}// end of inner-for loop
		}// end of outer-for loop

		returnObj['indents'] = countLineScore(spaceCounter);
		returnObj['indents_arr'] = spaceCounter;
		returnObj['code'] = cleanCodeLines(copyLines);

		return returnObj;
	} // end of countLines

	/* 
	 * @name: cleanCodeLines
	 * @input: array of code
	 * @output: remove all arrays that only have '' or are filled with spaces
	 * @notes: is called in the countLines fn.
	*/

	var cleanCodeLines = (arr) => {
		// we can assume that if the first character is a '' or ' ', then we can remove that line
		// we also remove lines that have no characters, and only spaces -- hence the regex
		var cleanedCode = [];
		var regex = /[^\s\\]/;


		for(var i = 0; i < arr.length; i++) {
			if(arr[i][0] === '' || arr[i].length === 0 || regex.exec(arr[i]) === null) {
				arr.splice(0, 1); // splice that item out
			} else {
				cleanedCode.push(arr[i]);
			}
		}
		return cleanedCode;
	}

	/* 
	 * @name: countLineScore
	 * @input: an array indicating the spaces before each line
	 * @output: provides an 'indentation score' regarding the user's code
	 * @notes: is called in the countLines fn.
	*/

	var countLineScore = (arr) => {

		var score = 0;
		for(var i = 1; i < arr.length; i++) {
			if(arr[i] > arr[i - 1]) {
				score = score + arr[i];
			} else if(arr[i] < arr[i - 1]) {
				score = score - arr[i];
			}
			// if the indentation is equal, nothing happens
		}
		// subtract the very first score
		score = score = arr[0];

		// set the score to parser
		parser.indentation = score;


		return score;
	}

	/* 
	 * @name: removeComments
	 * @input: n/a, works on the global variable: 'code'
	 * @output: removes code from // to /n and /* to its *\\
	 * @notes: Doesn't account for // that are spaced out (i.e. '/    /')
	*/

	var removeComments = (code) => {
		while(len >= 0) {
			var firstSlashIndex = code.indexOf('//');
			var firstStarComment = code.indexOf('/*');
			var secondStarComment = code.indexOf('*/');

			if(firstSlashIndex !== -1) {
				// increment the numComments
				numComments++;

				// need to remove that line
				var textToBeRemoved = code.slice(firstSlashIndex, code.length);

				// change the str to be of everything past the comment
				var newLineIndex = textToBeRemoved.indexOf('\n');
				
				// well, we know the first index includes the '//', so we can cut from
				// 0 to newLine
				var textToBeRemoved = textToBeRemoved.slice(0, newLineIndex);
				code = code.replace(textToBeRemoved, '');
			} else if(firstStarComment !== -1 && secondStarComment !== -1) {
				// increment the numComments
				numComments++;

				// re-apply logic for removing '//' to '/*'
				var textToBeRemoved = code.slice(firstStarComment, secondStarComment+2); // need a '+2' to account for '*/'

				code = code.replace(textToBeRemoved, '');
			} else {

				// no more comments left, so set to -1 and exit while-loop
				len = -1;

				// sets the number of comments to num_comments
				parser.num_comments = numComments;
				return code;
			}
		}
	} // end of removeComments

	// sets the code_length property on parser
	countWords(code);

	// pass in code to remove all comments
	var code = removeComments(code);

	// counts all lines and removes empty ones
	var arr_code = countLines(code);

	// arr_code returns an obj, and we only want the code portion
	var cleaned_code = arr_code.code; 

	// return the cleaned_code as well as the parser
	var obj = {
		code: cleaned_code,
		parser: parser,
	}

	return obj;

};