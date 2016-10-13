// Routes for the editor
var adminRouter = require('express').Router();
var adminController = require('./adminController.js');

adminRouter.route('/challenge')
  .get((req, res, next) => {
    adminController.getAllQuestions(req, res);
  });

adminRouter.route('/challenge/*')
  .get((req, res, next) => {
    console.log('getting route in admin');
    adminController.getQuestion(req, res);
  })
  .post((req, res, next) => {
    console.log('post to challenge');
    //addTest commented out as it is not implemented
    adminController.addQuestion(req, res, () => {
      adminController.addTest(req, res, () => {
        console.log()
        // res.sendStatus(201);
      });
    });
  });

adminRouter.route('/*')
  .get((req, res) => {
    res.status(404).render('index.html');
  });

module.exports = adminRouter;
