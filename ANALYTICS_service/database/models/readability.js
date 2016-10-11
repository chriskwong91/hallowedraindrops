// readability Table schema

var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var Readability = sequelize.define('readability', {
	U_ID: Sequelize.STRING, 
	Q_ID: Sequelize.STRING, 
	indentation: Sequelize.DOUBLE, 
	function_code_length: Sequelize.DOUBLE, 
	code_length: Sequelize.INTEGER,
	// repeated_statements: Sequelize.DOUBLE, // leave for future feature
	num_comments: Sequelize.INTEGER,
});

module.exports = Readability;