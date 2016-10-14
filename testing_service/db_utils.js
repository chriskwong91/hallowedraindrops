var db = require('./database/config.js');
var Test = require('./database/models/testing.js');
var _ = require('underscore');
var utils = require('./utils.js');

var Describe = function(describe) {
  this.description = describe.description;
  this.itsArr = describe.itsArr;
};

var It = function(it) {
  this.description = it.description;
  this.method = it.method;
  this.ans = it.ans;
  this.snippet = it.snippet;
};

module.exports = {
  newTest: function (req, res) {
    var question_name = req.body.name,
        itsArr = _.map(req.body.arr, (item) => {
          var newIt = new It({
            snippet: item.snippet,
            method: item.method,
            description: item.description,
            ans: item.answer
          });
          return newIt;
        });

    var dArr = [new Describe({
      itsArr: itsArr
    })];


    var test = new Test({
      question_name: req.body.name,
      dArr: JSON.stringify(dArr)
    });


    utils.newTest(req, res, test, (pass, tests) => {
      if (pass) {
        Test.findOne({question_name: req.body.name}).exec((err, found) => {
          if (err) {
            res.status(500).json({ error: err });
          }
          if (found) {
            found.question_name = req.body.name;
            found.dArr = JSON.stringify(dArr);
            res.json(tests);
          } else {
            test.save((err, newTest) => {
              console.log('New test added to db: ' , newTest);
              res.json(tests);
            });
          }
        });
      } else {
        res.json(tests);
      }
    });

  },

  getTest: function(req, res, callback) {
    const name = req.body.name;
    Test.findOne({question_name: name}).exec((err, found) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      if (found) {
        callback(found)
      } else {
        res.send('Test does not exist!');
      }
    });
  },

  updateTest: function(req, res) {

    Test.findOne({question_id: req.body.question_id}).exec((err, found) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      if (found) {
        found.fnInput = req.body.fnInput;
        found.fnOutput = req.body.fnOutput;
        found.sourceCode = req.body.sourceCode;
        found.save((err, test) => {
          if (err) {
            res.status(500).json({ error: err });
          }
          console.log('Test has been updated ', test);
          res.json(test);
        });
      } else {
        res.send('Test does not exist!');
      }
    });
  },
};
