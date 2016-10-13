// Readability controller that will add entry into DB.
// If entry already exists, it will update existing entry to fit new one

var Readability = require('../../database/models/readability.js');

module.exports = {

	addToDb: (data, username, question) => {
		Readability.sync().then(() => {
			return Readability.find({where:{U_ID: username, Q_ID: question}})
				.then((entry) => {
					console.log('entry value is: ', entry); // if no entry
					if(!entry) {
						// if it's not already created, create
						Readability.create(data);
							// .then((q) => callback(q));
						// not sure about q
					} else {
						// update old entry to the newer one
						Readability.update(data, {where: {U_ID: username, Q_ID: question}});
							// .then((q) => callback(q));
					}
				// callback(data);
			});
		});
	}
}