// middleware for our Analytics Service

const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = (app, express) => {
	// Print all of the requests to the server
	app.use(morgan('dev'));

	// Reads Information from forms ands put it in a body object
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

}