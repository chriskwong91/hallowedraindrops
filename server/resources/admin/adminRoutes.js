// Routes for the editor
var adminRouter = require('express').Router();
var adminController = require('./adminController.js');



adminRouter.route('/challenege')
  .get((req, res, next) => {

  })
  .post((req, res, next) => {
  });


module.exports = adminRouter;