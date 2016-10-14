// Routes for the editor
var replRouter = require('express').Router();
var replController = require('./replController.js');



replRouter.route('/runcode')
  .post((req, res, next) => {
    var time = setTimeout(() => {
      if (!res.headerSent) {
        res.send('>>> !!Error with running code...check infinite loop!!   ');
      }
    }, 5000);
    replController.sendCodeToService(req,res, time);
  });

replRouter.route('/testcode')
	.post((req, res, next) => {
		replController.sendCodeToTest(req, res);
	});


module.exports = replRouter;
