import React from 'react';
import { render } from 'react-dom';

import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

class ProfileHeader extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			problems: ['bubbleSort', 'problem2', 'problem3', 'problem4', 'problem5'],
			url: ''
		}
	}

	// The name within the banner-text-blog needs to be taken out

	// can add in some sort of selection thing here

	componentDidMount() {
		this.setState({
			url: this.props.github.github_url,
			problems: this.state.problems.push(this.props.problems)
		});
	}

	render () {
		var problems = ['bubbleSort', 'problem2', 'problem3', 'problem4', 'problem5'];

		return (
			<Jumbotron>
				<div className="blogger-banner-img">
				</div>
				<div className="banner-text-blog">
					Brian Zhou	
				</div>
				<div>
					<strong>Github:</strong>   {this.state.url}
					<br/>
				</div>
				<div className="dropdown">
					<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Problems <span className="caret"></span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						{  // this part isn't working
							problems.forEach((problem) => {
								return (
									<li>{problem}</li>
								)
							})
						}
					</ul>
				</div>
			</Jumbotron>
		)
	}
}

export default ProfileHeader;

/*
 <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>*/