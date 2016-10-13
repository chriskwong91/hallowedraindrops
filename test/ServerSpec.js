var should = require('chai').should();
var expect = require('chai').expect;
var http = require('http');
var webServer = require('../server/server.js');
var replServer = require('../repl_service/repl_server.js');
var request = require('request');

describe('Server Side Specifications', function() {
  var webInstance, replInstance;
  before(function(done) {
    webInstance = http.Server(webServer.app);
    webInstance.listen(8080, () => {
      var replInstance = http.Server(replServer.app);
      replInstance.listen(3000, () =>{
      done();
      });
    });
  });
  after(function() {
    // console.log('closing servers');
    if (webInstance) webInstance.close();
    if (replInstance) replInstance.close();
  });
  describe('Web Server', function() {
    it('should respond to POST request for /api/replservice/runcode with a 200 status code', function(done) {
      var requestParams = {
        method: 'POST',
        uri: 'http://127.0.0.1:8080/api/replservice/runcode',
        json: {
          code: "console.log('hello world!')"
        }
      };
      request(requestParams, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should respond with hello world ran through REPL', function(done) {
      var requestParams = {
        method: 'POST',
        uri: 'http://127.0.0.1:8080/api/replservice/runcode',
        json: {
          code: "console.log('hello world!')"
        }
      };
      request(requestParams, function(error, response, body) {
        var output = body;
        expect(body).to.equal('> hello world!\n> ');
        expect(body).to.be.an('string');
        done();
      });
    });

    it('Should 404 when asked for a nonexistent endpoint', function(done) {
      request('http://localhost:8080/pizza', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('REPL Service', function() {
    before(function() {
      // replServer.listen(3000);
    });
    after(function() {
      // replServer.close();
    });
    it('should respond to GET request for /api/repl with a 200 status code', function(done) {
      request('http://127.0.0.1:3000/api/repl', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
   it('should respond to POST request for /api/repl with a 200 status code', function(done) {
     var requestParams = {
       method: 'POST',
       uri: 'http://127.0.0.1:3000/api/repl',
       json: {
         code: "console.log('hello world!')"
       }
     };
     request(requestParams, function(error, response, body) {
       expect(response.statusCode).to.equal(200);
       done();
     });
   });

   it('should respond with hello world ran through REPL', function(done) {
     var requestParams = {
       method: 'POST',
       uri: 'http://127.0.0.1:3000/api/repl',
       json: {
         code: "console.log('hello world!')"
       }
     };
     request(requestParams, function(error, response, body) {
       var output = body;
       expect(body).to.equal('> hello world!\n> ');
       expect(body).to.be.an('string');
       done();
     });
   });

   it('Should 404 when asked for a nonexistent endpoint', function(done) {
     request('http://127.0.0.1:3000/pizza', function(error, response, body) {
       expect(response.statusCode).to.equal(404);
       done();
     });
   });
  });
});
