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
		var name = req.url.split('get')[1];
		BlogQuestion.sync().then(() => {
			BlogQuestion.find({where: {name: name}})
			.then((data) => {
				console.log('item found');
				res.status(200).send(data);
			});
		});
	},

	// addContent: (req, res) => {
	// 	// leave this one alone for now

	// }
}