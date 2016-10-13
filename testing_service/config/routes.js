// Routes received by the server
var db_utils = require('../db_utils.js');
var utils = require('../utils.js');
module.exports = (app) => {

  /**
    * @name /api/repl
    * @desc Creates a new REPL instance or runs request javascript code.
    *       Sends back the output of the code to the user.
    * @param {req, res} the request and response for calls
    * @returns {nothing}
    */
  app.route('/db/test')
    .get((req, res) => {
      db_utils.getTest(req, res);
    })
    .post((req, res) => {
      console.log(req.body)
      db_utils.newTest(req, res);
    })
    .put((req, res) => {
      db_utils.updateTest(req,res);
    });

  app.route('/api/test')
    .post((req, res) => {
      utils.testSuite(req, res);
    });
};
