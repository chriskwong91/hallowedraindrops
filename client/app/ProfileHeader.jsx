import React from 'react';
import { render } from 'react-dom';

import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

class ProfileHeader extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			problems: [],
			url: ''
		}
	}

	// The name within the banner-text-blog needs to be taken out

	// can add in some sort of selection thing here

	componentDidMount() {
		this.setState({
			url: this.props.github.github_url,
			problems: this.props.problems
		});

		setTimeout(() => {
			console.log(this.state.problems[0]['Q_ID']); // loop through them
		}, 2000);
	}

	render () {
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
				<div>
					
				</div>
			</Jumbotron>
		)
	}

}

export default ProfileHeader;