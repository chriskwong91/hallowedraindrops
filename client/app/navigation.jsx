
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
	}

	componentDidMount() {
	}



	render () { // we also need to build the nav bar on the right
		return (
		  <div>
		  	<NavBar fixedTop fluid staticTop>
		  		<Nav bsStyle="tabs" pullLeft>
		  			<NavItem onClick={() => this.props.sidebar() }>Prep-Challenges</NavItem>
		  			<NavItem onClick={() => this.props.sendcode()}>Run Code</NavItem>
		  			<NavItem onClick={() => this.props.testcode()}>Submit Code</NavItem>
					</Nav>
					<Nav bsStyle="tabs" pullRight>
						<NavItem pullRight>Profile Details</NavItem>
					</Nav>
				</NavBar>
		  </div>
		)
	}
}

export default Navigation;
