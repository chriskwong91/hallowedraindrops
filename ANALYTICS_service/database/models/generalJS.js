// genereal Table schema

var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var General = sequelize.define('general', {
	U_ID: Sequelize.STRING, 
	Q_ID: Sequelize.STRING,
	for: Sequelize.INTEGER,
	while: Sequelize.INTEGER,
	function: Sequelize.INTEGER,
	var: Sequelize.INTEGER,
	if: Sequelize.INTEGER,
	else: Sequelize.INTEGER,
});

module.exports = General;
