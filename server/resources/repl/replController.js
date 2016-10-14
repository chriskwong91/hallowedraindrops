var request = require('request-promise');
// var Promise = require('bluebird');
var service = require('../../config/services.js');

module.exports = {
  sendCodeToService: (req, res, time) => {
    console.log('req.body', req.body)
    var options = {
      method: 'POST',
      uri: service.run,
      body: req.body,
      json: true
    };
    request(options)
      .then((ranCode) => {
        console.log('ran Code, ', ranCode);
        clearTimeout(time);
        res.send(ranCode);
      })
      .catch((err) => {
        console.error('Error in POST request to REPL service: ', err);
        clearTimeout(time);
        res.sendStatus(404, err);
      });
  },
  sendCodeToTest: (req, res) => {
    var options = {
      method: 'POST',
      uri: service.suite,
      body: req.body,
      json: true
    };
    request(options)
      .then((tests) => {
        console.log('ran Code, ', tests);
        res.send(tests);
      })
      .catch((err) => {
        console.error('Error in POST request to REPL service: ', err);
        res.sendStatus(404, err);
      });
  },

};
