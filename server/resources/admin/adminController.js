var request = require('request-promise');
var Question = require('../../database/models/Questions.js');
var service = require('../../config/services.js');

module.exports = {
  addQuestion: (req, res, callback) => {
    console.log('Adding Question');
    var reqQ = req.body.question;
    Question.sync().then(() => {
      return Question.find({where:{name: reqQ.name}}).then((question) => {
        console.log(question, 'question');
        if (!question) {
          Question.create(reqQ).then((q) => callback(q));
            // .catch((error) => {
            //   res.status(500).send(error);
            // });
        }
      callback(question);
      });
    });
  },

  getAllQuestions: (req, res) => {
    Question.findAll({}).then((questions) => {
      res.send(questions);
    });
  },

  addTest: (req, res, callback) => {
    console.log('hello', req.body.varArry, Object.keys(req.body))
    var options = {
      method: 'POST',
      uri: service.testing,
      body: {
        arr: req.body.varArry,
        name: req.body.question.name,
        code: req.body.sourceCode
      },
      json: true
    };
    request(options)
      .then((test) => {
        console.log('Test was added');
        res.send(test);
        callback(test);
      }).catch((e)=> {
        console.error(e);
        res.sendStatus(404);
      });
  },

  getQuestion: (req, res) => {
    console.log('Getting Question');
    var urlPath = req.path.split('challenge/')[1];
    Question.sync().then(() => {
      return Question.find({where:{name: urlPath}}).then((question) => {
        if (!question) {
          res.send('Question Not Found');
        } else {
          res.send(question);
        }
      });
    });
  }
};
