// GeneralJS controller that will add entry into DB.
// If entry already exists, it will update existing entry to fit new one

var General = require('../../database/models/generalJS.js');

module.exports = (data, username, question) => {
	General.sync().then(() => {
		return General.find({where:{U_ID: username, Q_ID: question}})
			.then((entry) => {
				console.log('entry value is: ', entry); // if no entry
				if(!entry) {
					// if it's not already created, create
					General.create(data);
						// .then((q) => callback(q));
					// not sure about q
				} else {
					// update old entry to the newer one
					General.update(data, {where: {U_ID: username, Q_ID: question}});
						// .then((q) => callback(q));
				}
			// callback(data);
		});
	});
}
