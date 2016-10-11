// Routes received by the Analytics Server

var parser = require('./parser.js');
var addtodb = require('./addToDB.js');

module.exports = (app) => {

	/*
	 * @name: /api/analytics/sendcode
	 * @@desc: A route for the user to send code to
	 * @param: {req, res} the request and response for call. 
	 * -->req.body should contain code
	 * @returns: {nothing}
	 */

	 /* Note that the routes to the service will require attention on the
	 	- webserver's services.js / routes.js / repl (folder)

	*/
	app.route('/api/analytics/:userId/:problemId')
		.get((req, res) => { 
			// not in use right now
			res.send(200);
		}) 
		.post((req, res) => { 

			// ex is: /api/analytics/brian/1234
			var url = req.url;

			// 3 and 4 are respectively 'brian' and '1234'
			var urlSplit = url.split('/');

			// the user
			var username = urlSplit[3];

			// the problem_ID that the user solved
			var question = urlSplit[4];

			// parsed-results is an object with 4 keys
			var parsed_results = parser(req.body);

			// adds all items into our db
			addtodb(parsed_results, username, question);

			res.send('Analytics Received!');
		});

}