import React from 'react';
import ReactDOM from 'react-dom';

// Other Components
import BloggerQuestions from './blogger-questions.jsx';
import BlogNavigation from './blog-navigation.jsx';
import BloggerProfile from './blogger-profile.jsx';
import BloggerFooter from './blogger-footer.jsx';

// React Components
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

var Promise = require('bluebird');

class Blogger extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// empty for now
			currentPage: 0, // the page in the array
			currentUser: '',
			github: [],
			blog: [],
			user: '',
		}
	}

	componentDidMount() {
		this.getUrl();

	}

	/* @name: getUrl
	 * @input: n/a
	 * @output: gets url from the window and sends it out
	 */

	getUrl() {
		var url = window.location.pathname.slice(6, window.location.pathname.length);
		setTimeout(() => {
			this.setState({
				user: url
			});
			this.getGithub();
			this.getBlog();
			console.log('state for this.state.user is: ', this.state.user);
		}, 1000)
	}

	/* @name: getGithub
	 * @input: n/a
	 * @output: A call to the DB to get Github data and per User
	 */

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

	/* @name: getBlog
	 * @input: n/a
	 * @output: A call to the DB to get Blog data per User
	 */ 

	getBlog() {
		/* a fetch to get all blogs from our DB */
		console.log('making request to: ', this.state.user);
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/api/blog/getblog/' + this.state.user,
			success: (data) => {
				this.setState({
					blog: data
				});
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
		// order them by their number of views
	}


	render () {
		return (
			<div className="blogger-font" id="blog-username" data-username={document.URL}>
				<BlogNavigation></BlogNavigation>
				<Grid>
					<Row>
						<Col>
							<BloggerProfile profile={this.state.github}></BloggerProfile>
							<BloggerQuestions blog={this.state.blog}></BloggerQuestions>
						</Col>
					</Row>
				</Grid>
				<BloggerFooter></BloggerFooter>
			</div>
		)
	}
}

export default Blogger;

