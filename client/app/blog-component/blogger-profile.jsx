import React from 'react';
import ReactDOM from 'react-dom';

import Image from 'react-bootstrap/lib/Image.js';
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';


class BloggerProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			github: []
		}
	}

	componentDidMount () {
		this.getUrl();
		this.getGithub();
	}

	getUrl() {
		var url = window.location.pathname.slice(6, window.location.pathname.length);
		setTimeout(() => {
			this.setState({
				user: url
			});
			this.getGithub();
			console.log('state for this.state.user is: ', this.state.user);
		}, 1000)
	}

	getGithub() {
		console.log('making request to: ', this.state.user);
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/api/blog/getgithub/' + this.state.user,
			success: (data) => {
				this.setState({
					github: data
				});
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}



	/* the div with class 'blogger-banner-img' will be space where they can enter a photo */
	render () {
		return (
			<div>
				<Jumbotron>
					<div className="blogger-banner-img">

					</div>
					<div className="banner-text-blog">
						{this.props.name}
					</div>
					<div>
						<strong>Github:</strong>   www.github.com/brianzhou13
						<br/>
						<strong>LinkedIn:</strong> www.linkedin.com 
					</div>
				</Jumbotron>
			</div>
		)
	}
}

export default BloggerProfile;