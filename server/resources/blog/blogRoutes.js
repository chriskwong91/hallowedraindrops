
var blogRouter = require('express').Router();
var blogController = require('./blogController.js');

/* use this route for getting the user's information to display for blog*/
blogRouter.route('/get/')
	.get((req, res, next) => {
		blogController.getContent(req, res);
	});

/* use this route for adding in user's information to display for blog */
blogRouter.route('/post')
	.post((req, res, next) => {
		var authUser = req._passport.instance._userProperty;
		console.log('value for authuser is: ', req._passport.instance);
		console.log('value for req.sessions in blogRoutes.js is: ', req.session);
		console.log(req.user);
		// if(authUser === 'user') {
		// 	res.status(400).send('re-authenticate with github please!'); // tell them they need to re-auth with github
		// } else {
		// 	blogController.addContent(req, res);
		// }

	});

module.exports = blogRouter;

/*_passport:
   { instance:
      Authenticator {
        _key: 'passport',
        _strategies: [Object],
        _serializers: [Object],
        _deserializers: [Object],
        _infoTransformers: [],
        _framework: [Object],
        _userProperty: 'user',*/