
var blogRouter = require('express').Router();
var blogController = require('./blogController.js');

var blogCache = {};

/* use this route for getting the user's information to display for blog*/
blogRouter.route('/get/')
	.get((req, res, next) => {
		blogController.getContent(req, res);
	});

/* use this route for adding in user's information to display for blog */
blogRouter.route('/post')
	.post((req, res, next) => {
		blogController.addContent(req, res);
	});

blogRouter.route('/getall')
	.get((req, res, next) => {
		blogController.getAllContent(req, res);
	});

blogRouter.route('/getallgithub')
	.get((req, res, next) => {
		blogController.getAllGithub(req, res);
	});

blogRouter.route('/getgithub/:githubuser')
	.get((req, res, next) => {
		blogController.getGithubUser(req, res);
	});

blogRouter.route('/getblog/:githubuser')
	.get((req, res, next) => {
		console.log('entered into github user');
		/* need a helper fn added inside here */
	})

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