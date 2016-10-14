
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';

var Promise = require('bluebird');

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			url: ''
		}
	}

	componentDidMount() {
		this.getGithubName = this.getGithubName.bind(this);
		this.transitionToProfile = this.transitionToProfile.bind(this);
		this.getGithubName();
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
	        url: '/profile/' + final
	      });
	    },
	    error: (jqXHR, textStatus, errorThrown) => {
	      console.log(textStatus, errorThrown, jqXHR);
	    }
	  })
	}

	transitionToProfile () {
		window.location = this.state.url;
	}

	render () { // we also need to build the nav bar on the right
		return (
		  <div>
		  	<NavBar fixedTop fluid staticTop>
		  		<Nav bsStyle="tabs" pullLeft>
		  			<NavItem onClick={() => this.props.sidebar() }>Prep-Challenges</NavItem>
		  			<NavItem onClick={() => this.props.sendcode()}>Run Code</NavItem>
		  			<NavItem onClick={() => this.props.testcode()}>Submit Code</NavItem>
		  			<NavItem onClick={() => this.props.pairme()}>Pair Me</NavItem>
					</Nav>
					<Nav bsStyle="tabs" pullRight>
						<NavItem onClick={() => this.transitionToProfile()}>Profile Details</NavItem>
					</Nav>
				</NavBar>
		  </div>
		)
	}
}

export default Navigation;
