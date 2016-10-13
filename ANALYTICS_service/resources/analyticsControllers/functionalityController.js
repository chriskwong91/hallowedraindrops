// functionality controller that will add entry into DB.
// If entry already exists, it will update existing entry to fit new one

var Functionality = require('../../database/models/functionality.js');

module.exports = {

	addToDb: (data, username, question) => {
		Functionality.sync().then(() => {
			return Functionality.find({where:{U_ID: username, Q_ID: question}})
				.then((entry) => {
					console.log('entry value is: ', entry); // if no entry
					if(!entry) {
						// if it's not already created, create
						Functionality.create(data);
							// .then((q) => callback(q));
						// not sure about q
					} else {
						// update old entry to the newer one
						Functionality.update(data, {where: {U_ID: username, Q_ID: question}});
							// .then((q) => callback(q));
					}
				// callback(data);
			});
		});
	},

	// getFromDb:
	getFromDb: (req, res, username) => {
		Functionality.sync().then(() => {
			return Functionality.find({where: {U_ID: username}}).then((question) => {
				if(!question) {
					res.status(404).send('Question not found');
				} else {
					res.send(question); // sends back data
				}
			})
		});
	}
}
