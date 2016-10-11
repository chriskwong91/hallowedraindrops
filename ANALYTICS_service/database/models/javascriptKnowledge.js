// javascript Table schema

var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var Javascript = sequelize.define('javascript', {
	U_ID: Sequelize.STRING,
	Q_ID: Sequelize.STRING, 
	forEach: Sequelize.INTEGER,
	map: Sequelize.INTEGER,
	filter: Sequelize.INTEGER,
	reduce: Sequelize.INTEGER,
	apply: Sequelize.INTEGER,
	call: Sequelize.INTEGER,
	bind: Sequelize.INTEGER,
	arguments: Sequelize.INTEGER,
	push: Sequelize.INTEGER,
	pop: Sequelize.INTEGER,
	slice: Sequelize.INTEGER,
	splice: Sequelize.INTEGER,
	shift: Sequelize.INTEGER,
	unshift: Sequelize.INTEGER,
	sort: Sequelize.INTEGER,
	reverse: Sequelize.INTEGER,
	length: Sequelize.INTEGER,
});

module.exports = Javascript;
