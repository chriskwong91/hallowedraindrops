// Attaches the username and question-id to obj, and adds table into DB

var functionalityDB = require('../resources/analyticsControllers/functionalityController.js');
var generalDB = require('../resources/analyticsControllers/generalController.js');
var jsDB = require('../resources/analyticsControllers/javascriptKnowledgeController.js');
var readabilityDB = require('../resources/analyticsControllers/readabilityController.js');

module.exports = (results, username, question) => {

	// add in the username and question parameters
	for(var keys in results) {
		results[keys]['U_ID'] = username;
		results[keys]['Q_ID'] = question;
	}

	// add items into the db
	functionalityDB.addToDb(results.functionality, username, question);
	jsDB.addToDb(results.knowledge, username, question);
	generalDB.addToDb(results.general, username, question);
	readabilityDB.addToDb(results.readability, username, question);
}