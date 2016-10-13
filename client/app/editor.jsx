  // a placeholder for our editor file.
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

import Output from './output.jsx';
import Sidebar from './challenge.jsx';
import Navigation from './navigation.jsx';

import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import jqconsole from '../jqconsole.js';



var Promise = require('bluebird');

class Editor extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    text: "console.log('hello world')", // text is going to be the code the user inputs
	    outputText: [],
	    sidebar: false,
	    question: '',
	    auth: false,
      console: null,
      current_question: '',
      github: ''
	  };
	}

	componentDidMount() {
    this.editor = this.editorSetup();
    this.socket = this.setupSocket();
    this.editor.setValue(this.state.text);

    // functions that are getting passed into navigation.jsx
    this.sidebar = this.sidebar.bind(this);
    this.getText = this.getText.bind(this);
    this.sendCode = this.sendCode.bind(this);
    this.testCode = this.testCode.bind(this);
    this.startConsole = this.startConsole.bind(this);
    this.sidebar();
    this.startConsole();

    this.getGithubName = this.getGithubName.bind(this);
    this.analyzeCode = this.analyzeCode.bind(this);

    this.getGithubName();

    // reset the container to 0
    $('.container').css("margin", 0);

  }

  getText() {
    var code = this.editor.getValue();
    this.setState({
      text : code
    });
  }

  // sendCode will take the code on the 'text' state
  // and will be processed on the server
  sendCode() {
    console.log(this.state);
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/api/replservice/runcode',
      data: {code: this.state.text},
      success: (data) => {
        console.log('data value is: ', data);
        this.socket.emit('append result', data);
        // $('.response').append(data);
        console.log('after socket');
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    });
  }

  getGithubName() {
    // you'd use this to get the github id on the session
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/auth/github_user',
      success: (data) => {
        var x = JSON.stringify(data);
        var userIndex = x.search(/username/) + 13;
        var profileIndex = x.search(/profileUrl/);
        var sliced = x.slice(userIndex,profileIndex);
        var slicedIndex = (/[\W]/g).exec(sliced);
        var final = sliced.slice(0, slicedIndex.index);
        this.setState({
          github: final
        });
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    })

  }

  analyzeCode() {
    $.ajax({
      method: 'POST',
      data: {code: this.state.text },
      url: 'http://localhost:4000/api/analytics/' + this.state.github + '/' + this.state.current_question,
      success: (data) => {
        console.log('success in sending to analytics');
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    })
  }

  testCode() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/api/replservice/testcode',
      data: {code: this.state.text, name: this.state.current_question},
      success: (data) => {
        console.log('value for data is: ', data);
        var val = JSON.parse(data);
        console.log('val value is: ', val);
        if(val.failedTests.length === 0) {
          // call another fn 
          console.log('entering into the success');
          this.analyzeCode();
        }
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    });
  }

  // setupSocket will emit the events when the keydown event occurs
  // there is a problem here... where we are transmitting every key
  setupSocket() {
    var socket = io(window.location.pathname.split('editor')[1]); // FIX ME
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    socket.on('alter text', (msg) => {
      if(this.state.text !== msg) {
        this.setState({
          text: msg
        });

        //Get the range of selected text adn cursor
        var pos = this.editor.getCursorPosition();
        var range = this.editor.getSelectionRange();

        this.editor.setValue(this.state.text);

        // make sure the selected word stays highlighted
        if (range.start.row === pos.row && range.start.column === pos.column) {
          this.editor.selection.setRange(range, true);
        } else {
          this.editor.selection.setRange(range);
        }
      }
    });

    socket.on('alter result', (msg) => {
      //2 and 3
      var finalMsg = msg.slice(2, msg.length);
      var finalMsg = finalMsg.substring(0, finalMsg.length - 3);

      // var output = [];
      // msg.split('\n').forEach((line) => {
      //   output.push(line);
      // });

      // this.setState({
      //   outputText: output
      // });

      // write into the output console
      // note that it's expecting a string
      this.state.console.Write(finalMsg + '\n', 'my-output-class');


      // $('.response').append(msg);
    });

    return socket;
  }

  // editorSetup will place in the settings for our editor
  // i.e. themes, language, etc.
  editorSetup () {
    var editor = ace.edit("editor");

    editor.setTheme("ace/theme/dreamweaver");
    editor.getSession().setMode("ace/mode/javascript"); // going to execute js
    editor.getSession().setUseSoftTabs(true); // use soft-tabs
    editor.setHighlightActiveLine(false); // sets line highlighting
    document.getElementById('editor').style.fontSize='13px'; // sets the font-size
    editor.getSession().setUseWrapMode(true);
    editor.resize();

    return editor;
  }

  handleKeyPress (e) {
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    this.socket.emit('text change', text);
  }


	sidebar () {
	  this.setState({
	    sidebar: !this.state.sidebar
	  });
  	$("#wrapper").toggleClass("toggled");

    if(!this.state.sidebar) { // if it's not clicked
      // adjust the div=container
      $('.container').css("margin", 0);
      // $('.container').css("margin-right", "0px");
    }
	}

  startConsole () {
    // move jqconsole out
    var jqconsole = $('#console-terminal-editor').jqconsole('Hi\n', '>>>');

    this.setState({
      console: jqconsole
    });

    // jqconsole setup


    $(function () {
        var startPrompt = function () {
        // Start the prompt with history enabled.
        jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        jqconsole.Write(input + '\n', 'jqconsole-output');
        // Restart the prompt.
        startPrompt();
        });
      };
    startPrompt();
    });
    // $(div).jqconsole(welcomeString, promptLabel, continueLabel);
  }

  pasteCode(question) {
    this.editor.setValue(question.prompt);
    this.setState({current_question: question.name});
  }
	render () {

    return (
    	<div>
    	<Navigation sidebar={this.sidebar} sendcode={this.sendCode} testcode={this.testCode}></Navigation>
	    	<div id="wrapper">
	    		<Sidebar pasteCode={this.pasteCode.bind(this)}></Sidebar>
	        <div id="page-content-wrapper">
	        	<Grid>
		        	<Row className="home-editor">
		        			<div id="editor" className="home-editor" onKeyUp={this.handleKeyPress.bind(this)}></div>
		        	</Row>
		        	<Row className="home-console">
		        			<Output output={this.state.outputText} console={this.state.console}></Output>
		      		</Row>
	      		</Grid>
		      </div>
		    </div>
	    </div>
    )
  }
}

export default Editor;
