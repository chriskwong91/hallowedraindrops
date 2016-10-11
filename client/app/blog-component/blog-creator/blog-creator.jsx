// blog-creator will be used to create new blog-pages and add entries into blog
// THIS CAN BE AN ADMIN-ONLY PAGE SO UI ISN'T IMPORTANT

import React from 'react';
import ReactDOM from 'react-dom';

import FormControl from 'react-bootstrap/lib/FormControl.js';
import FormGroup from 'react-bootstrap/lib/FormGroup.js';

import { Link } from 'react-router';

class BlogCreator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	// need db to be hooked
	// need to make a request 
	componentDidMount() {
		console.log('the blog-creator component mounted');
	}

	addContent () {
		// this is going to make a fetch request 
	}

	render() {
		return (
			<div>
				<form>
					<FieldGroup
			      id="formControlsText"
			      type="text"
			      label="Text"
			      placeholder="Enter text"
			    />
				</form>			
			</div>
		)
	}
}

export default BlogCreator;