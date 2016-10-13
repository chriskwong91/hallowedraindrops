// javascriptKnowledge controller that will add entry into DB.
// If entry already exists, it will update existing entry to fit new one

var Javascript = require('../../database/models/javascriptKnowledge.js');

module.exports = {
	
	addToDb: (data, username, question) => {
		Javascript.sync().then(() => {
			return Javascript.find({where:{U_ID: username, Q_ID: question}})
				.then((entry) => {
					console.log('entry value is: ', entry); // if no entry
					if(!entry) {
						// if it's not already created, create
						Javascript.create(data);
							// .then((q) => callback(q));
						// not sure about q
					} else {
						// update old entry to the newer one
						Javascript.update(data, {where: {U_ID: username, Q_ID: question}});
							// .then((q) => callback(q));
					}
				// callback(data);
			});
		});
	},

	getFromDb: (req, res, username) => {
		Javascript.sync().then(() => {
			return Javascript.find({where: {U_ID: username}}).then((question) => {
				if(!question) {
					res.status(404).send('Question not found');
				} else {
					res.send(question); // sends back data
				}
			})
		});
	}
}
