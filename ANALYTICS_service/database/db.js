// Initialize our sequelizeDB here

var Sequelize = require('sequelize');
var fs = require('fs');
var pg = require('pg');

try {
	fs.accessSync(__dirname + '/../config/env/config.js', fs.F_OK);
	// file is present
	pgCred = require('../config/env/config.js').awspostgres;
} catch (e) {
	// It isn't accessible
	pgCred = require('../config/env/config_example.js').postgres;
}

// once we have a server setup, we can have it directly set to our URL
var sequelize = new Sequelize(pgCred.db, pgCred.user, pgCred.password, {
	host: pgCred.host,
	dialect: 'postgres',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});

sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully');
	})
	.catch(function(err) {
		console.log('Unable to connect to the database', err);
	});

module.exports = {
	sequelize: sequelize 
};
