// component for a user to select that he/she wants to solve a problem

import React from 'react';
import { render } from 'react-dom';

//Redux

import store from './store/index';
import {questionsList} from './actions/index';
import {connect} from 'react-redux'

let state = store.getState;
/* React-Bootstrap Components */

class MenuWrap extends React.Component {
	//Sidebar will list questions

    constructor(props) {
	    super(props);
	    this.state = {
	    	hidden: false,
	    	questions: [],
	     	curr: '',
	    	shareCode: 'Copy Pad URL', // text of shareCode
	    	windowLink: '' // link of the window
	  	};
    }

  componentDidMount() {
  	this.makeRequest();
  	this.setLink();
  	this.clipboardSetup();
  }

  /* @name: setLink:
   * @input: initial DOM render
   * @output: Sets the windowLink state to be the window URL to be copied
  */

  setLink() {
  	var link = window.location.hostname + ':' + window.location.port + window.location.pathname;
  	this.setState({
  		windowLink: link
  	});
  }

  /* @name: clipboardSetup:
   * @input: clipboard.js package
   * @output: Creates a new Clipboard instance that is focused on the DOM element '.share-code'
  */

  clipboardSetup() {
  	new Clipboard('.share-code');
  }


	show() {
		this.setState({hidden: false});
	}

	/* @name: getChallengeQuestion
	 * @input: Click
	 * @output: Desired Question will populate in Editor in comments
	*/

	getChallengeQuestion() {
		// find the className of that particular question
		// when rendering, we need to attach a question with it.

		// 1. getter to make a 'GET' request from db for questions
			// 3. we now have the responses, and we use map to display

		//SERVER-SIDE
			// 2. once we get the responses back, then we return only the top 10 back to client

	}

	/* @name: getWindowLink:
	 * @input: Click
	 * @output: shareCode state is changed, and UI re-renders text to display 'Link Copied'
	*/

	getWindowLink() {
		this.setState({
			shareCode: 'Link Copied!'
		});
	}

	makeRequest(challenge) {
		$.ajax({
		  method: 'GET',
		  url: 'http://localhost:8080/admin/challenge',
		  success: (data) => {
        store.dispatch(questionsList(data));
		  },
		  error: (jqXHR, textStatus, errorThrown) => {
		    console.log(textStatus, errorThrown, jqXHR);
		  }
		});
	}

	renderQuestion(question) {
		return (
			<li onClick={() => this.props.pasteCode(question)} className="sidebar-brand">
				<a>{question.name}</a>
			</li>
		);
	}
	render() {
		let style;

		if(this.state.hidden) {
			style = { display: 'none'};
		}

		return (

			<div>
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<li className="share-code sidebar-brand" data-clipboard-text={this.state.windowLink} onClick={this.getWindowLink.bind(this)}>
							<span>{this.state.shareCode}</span>
						</li>
						{this.props.questions.map(this.renderQuestion.bind(this))}
						<li className="sidebar-brand">
							<a href="/challenge/splash">-- add challenge --</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        questions: state.sideBar.questionsList
    }
}


//wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(MenuWrap)
