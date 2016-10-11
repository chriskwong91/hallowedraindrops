// functionality Table schema

var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var Functionality = sequelize.define('functionality', {
	U_ID: Sequelize.STRING, // not sure
	Q_ID: Sequelize.STRING, // not sure
	speed: Sequelize.DOUBLE,
	space: Sequelize.DOUBLE,
});

module.exports = Functionality;
