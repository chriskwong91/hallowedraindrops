// a placeholder for our editor file.
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

// var Promise = require('bluebird');

export default class Editor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  text: 'hello world', // text is going to be the code the user inputs
		}
	}

	componentDidMount() {
		// uncommented for testing


	//   this.editor = this.editorSetup();
	//   this.socket = this.setupSocket();
	//   this.editor.setValue(this.state.text);
	}

	render () {
		return (
		  <div>
		    <button>Hello World </button>
		    <div id="editor"></div>
		  </div>
		)
	}
}

// module.exports = Editor; //
