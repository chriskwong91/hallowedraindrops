/*	name: sequelize.STRING,
	linkedin: sequelize.STRING,
	github_url: sequelize.STRING,
	bootcamp: sequelize.STRING,
	banner_img: sequelize.STRING,
	Q1: sequelize.TEXT,
	Q2: sequelize.TEXT,
	Q3: sequelize.TEXT,
	Q4: sequelize.TEXT,
	Q5: sequelize.TEXT,
	Q6: sequelize.TEXT,
	page_comments: sequelize.TEXT,
	views: sequelize.Number,*/

var BlogQuestion = require('../../database/models/BlogQuestions.js');

module.exports = {
	getContent: (req, res) => {
		var name = req._passport.instance._userProperty;
		// name is github name on the session
		BlogQuestion.sync().then(() => {
			BlogQuestion.find({where: {name: name}})
			.then((data) => {
				console.log('item found');
				res.status(200).send(data);
			});
		});
	},

	addContent: (req, res) => {
		console.log('entered into addContent');
		var name = req._passport.instance._userProperty; //github name
		var dataToBeAdded = req.body;

		// given their first name, can we actually get their github?
		// we can go ahead and pick up the github handle
		console.log('req.session value is: ', req.session);
		console.log('req.body value is: ', req.body);
		// we have the name now
		// BlogQuestion.sync().then(() => {
		// 	BlogQuestion.find({where: {name: name}})
		// 	.then((data) => {
		// 		if(!data) {
		// 			BlogQuestion.create();
		// 		}

		// 	})
		// })

	}
}