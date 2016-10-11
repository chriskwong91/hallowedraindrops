import React from 'react';
import { render } from 'react-dom';

//react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

// Somewhere like a Redux middleware or Flux action:
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

// var $ = require('jquery');

// Go to /some/path.

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pad_link: ''
		}
	}

	componentWillMount() {
		console.log('did not mount yet');
	}

	componentDidMount() {
		// uncommented for testing
		this.setPad();
	}

	githubAuth () {
		document.location.href='/auth/github';
	}

	setPad() {
		$.get('/pad/create', (data) => {
			//** try redirecting wtih browserHistory

			this.setState({
				pad_link: '/editor' + data
			});

			console.log('editor is: ', this.state.pad_link);

			// window.location = 'editor' + data; // does this do a redirect?
			// do the redirect here to the appropriate page.
		})
	}

	// whatever link they added in, throw in a post request with the id

	// *may need a promise
	// 1. user wants to create a pad
	// 2. we give client back a unique pad_ID key
	// 3. with that unique pad_ID key, we move them to that page
	// 4. on our server side, we catch that route and then send them the pad.html using res.render
	// 5. then for that specific route, we will serve

// removing from the home-terminal onClick: onClick={this.setPad.bind(this)}
// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <span className="home-terminal"><Link to={this.state.pad_link}>      >_</Link></span>
//	<span className="home-terminal"><a href= {this.state.pad_link}>      >_</a></span>


/* Note: the blog will only be temporarily here..*/
	render() {
		return (
			<div>
				<Jumbotron className="banner">
					<span className="banner-text">codedrop</span>

					<div>
						<Link className="home-terminal" to="/blog">Blog (temporary)</Link>
					</div>

				</Jumbotron>

				<div className="below-banner">
					<span className="below-banner-text">preparing <b className="blue-you">you</b> for success</span>
				</div>

				<div className="home-bar">
					<Grid className="home-grid">
						<Row className="home-github">
							<Col md={1} mdPush={5} className="vcenter">
								<div className="home-selection">
									<Image src="./styling/img/github-mark-resized.png" circle responsive onClick={this.githubAuth.bind(this)}/>
								</div>
							</Col>
							<Col md={1} mdPush={5} className="vcenter">
								<div className="home-selection">
									 <span className="home-terminal"><Link to={this.state.pad_link}>      >_</Link></span>
								</div>
								{this.props.children}
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Home;
// have the page load in home.jsx
// render(<App/>, document.getElementById('app'));
