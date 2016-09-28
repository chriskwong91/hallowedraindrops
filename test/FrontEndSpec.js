var should = require('chai').should();
var sinon = require('sinon');

describe('Server Side Specifications', function() {
  describe('Test function', function() {
  	// manually create and restore the sandbox
  	var sandbox,
  			jamesBond;

  	var licensesToKill = {
	    start: function (agent) {
	        agent.apply(this);
	    }
  	};

  	beforeEach(function () {
	    sandbox = sinon.sandbox.create();

  	});

  	afterEach(function () {
	    sandbox.restore();
  	});

  	it('should call once', function() {
	  	// By using a sinon.spy(), it allows us to track how the function is used
	  	jamesBond = sinon.spy();
	  	licensesToKill.start(jamesBond);
	  	jamesBond.calledOnce.should.equal(true);
  	});
  	
    it('should be called twice', function() {
	  	jamesBond = sinon.spy();
	  	licensesToKill.start(jamesBond);
	  	licensesToKill.start(jamesBond);
    	jamesBond.calledOnce.should.equal(false);
    });

    it('should be called more than once', function() {
	  	jamesBond = sinon.spy();
	  	licensesToKill.start(jamesBond);
	  	licensesToKill.start(jamesBond);
	  	licensesToKill.start(jamesBond);
    	jamesBond.callCount.should.equal(3);
    });

  });
});

 /* tests:
 Basic:
-The editor mounted
-The socket was created
-It should render only one code editor

Intermediate:
-The user typed something and it was reflected in the editor
-It should load ‘hello world’ upon first load
-If text was deleted, it should be updated on both
-If a new line was entered, it should be updated on both
-If a bad function was written, it should receive an error

Advanced:
-The user typed something on the editor and it was reflected in both
*/

//NOTES:
// we'd also need webpack 

