
var blogRouter = require('express').Router();
var blogController = require('./blogController.js');

/* use this route for getting the user's information to display for blog*/
blogRouter.route('/get/:userid')
	.get((req, res, next) => {
		blogController.getContent(req, res);
	});

/* use this route for adding in user's information to display for blog */
blogRouter.route('/post/:userid')
	.post((req, res, next) => {
		blogController.addContent(req, res);
	});

module.exports = blogRouter;