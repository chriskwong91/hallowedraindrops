var should = require('chai').should();
var sinon = require('sinon');

describe('Server Side Specifications', function() {
  describe('Test function', function() {
  	// manually create and restore the sandbox
  	var sandbox,
  			jamesBonds;

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

var expect = require('chai').expect;
var http = require('http');
var webServer = require('../server/server.js');
var replServer = require('../repl_service/repl_server.js');
var request = require('request');
var sinon = require('sinon');

import React from 'react';
import { mount, shallow } from 'enzyme';

import Editor from '../client/app/editor';
import Navigation from '../client/app/navigation';
import Output from '../client/app/output';

// var Editor = require('../client/app/editor.jsx');


describe('Front End Editor Page Specifications', function() {
  var sandbox, jamesBond, webInstance, replInstance;
  // testing port
  var webTestingPort = 8080;
  var replTestingPort = 3000;

  beforeEach(function (done) {
    // sandbox = sinon.sandbox.create();
    webInstance = http.Server(webServer.app);
    webInstance.listen(webTestingPort, () => {
      replInstance = http.Server(replServer.app);
      replInstance.listen(replTestingPort, () => {
      done();
      });
    });
  });

  afterEach(function (done) {
    // sandbox.restore();
    if(replInstance) replInstance.close();
    if(webInstance) webInstance.close();
    done();
  });

  // Code below may be needed for front-end grunt-mocha testing
  // before(() => {
  //   if (navigator.userAgent.indexOf('PhantomJS') < 0) {
  //     mocha.run();
  //   }
  // })

  describe('Test function', function() {
  	// manually create and restore the sandbox
  	var licensesToKill = {
	    start: function (agent) {
        agent.apply(this);
	    }
  	};

    it('should call once', function(done) {
      // By using a sinon.spy(), it allows us to track how the function is used
      jamesBond = sinon.spy();
      licensesToKill.start(jamesBond);
      jamesBond.calledOnce.should.equal(true);
      done();
    });
  });

  describe('High-level Component Tests', function() {
    it('should have an editor component', function(done) {
      const wrapper = mount(<Editor/>); // I have it set to mount for now..,
      expect(wrapper.find(Editor)).to.have.length(1);
      done();
    });

    it('should have a navigation component', function(done) {
      const wrapper = mount(<Navigation/>);
      expect(wrapper.find(Navigation)).to.have.length(1);
      done();
    });

    it('should have an output component', function(done) {
      const wrapper = mount(<Output/>);
      expect(wrapper.find(Output)).to.have.length(1);
      done();
    });
  });

  // COMPONENT STATE TESTS
  describe('High-Level Component State Tests', function() {
    it('Editor should have a "text" state', function() {
      const wrapper = mount(<Editor/>);
      // default state for 'text' will be 'hello world'
      expect(wrapper.state('text')).to.equal('hello world');
    });
  });

  // NAVIGATION COMPONENT TESTS
  describe('Navigation-Specific Tests', function() {
    it('Navigation should have a button', function() {
      const wrapper = mount(<Navigation/>);
      expect(wrapper.find('button')).to.have.length(1);
    });

  });

  // EDITOR COMPONENT TESTS
  describe('Editor-Specific Tests', function() {
    it('calls componentDidMount', () => {
      sinon.spy(Editor.prototype, 'componentDidMount');
      const wrapper = mount(<Editor />);
      expect(Editor.prototype.componentDidMount.calledOnce).to.equal(true);
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

