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

import { Link } from 'react-router';

class Blogger extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// empty for now
			currentPage: 0, // the page in the array
			users: ['Brian Zhou', 'Chris Wong', 'thai'] // the users who have pages
		}
	}

	componentDidMount() {
		console.log('blogger component mounted');
	}

	// a service that will make a call to the db for that blog profile
		// should be a sql db

	// will pull in data from the database for
		// the user that's being pulled will be from the url
			//

	/* To-Dos:
		columns for this page

		**Below doesn't work well right now, and it should be inserted within
			the jumbotron portion
	<Jumbotron className="banner">
		<BloggerProfile user={this.state.users[this.state.currentPage]}></BloggerProfile>
	</Jumbotron>
<Col md={1} mdPush={5} className="vcenter">
								<div className="home-selection">
									<Image src="./styling/img/github-mark-resized.png" circle responsive onClick={this.githubAuth.bind(this)}/>
								</div>
							</Col>


	*/

// footer link: 				<BloggerFooter></BloggerFooter>

	render () {
		var user = this.state.users[this.state.currentPage];
		return (
			<div className="blogger-font">
				<BlogNavigation></BlogNavigation>
				<Grid>
					<Row>
						<Col>
							<BloggerProfile name={user}></BloggerProfile>
							<Link to="/blog/create-blog">go to create-blog</Link>
							<BloggerQuestions></BloggerQuestions>
						</Col>
					</Row>
				</Grid>

				<BloggerFooter></BloggerFooter>
			</div>
		)
	}
}

export default Blogger;

// Could add a Footer that's blue to direct to HR

// we need 4 components
// photo
// questions
// page
// user info
// navbar
