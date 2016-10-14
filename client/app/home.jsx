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
	}

	componentWillMount() {
		console.log('did not mount yet');
	}

	componentDidMount() {
		console.log('entered inside of the home.jsx file');
	}

	githubAuth () {
		document.location.href='/auth/github';
	}

	setPad() {
		$.get('/pad/create', (data) => {
			window.location = 'editor' + data;
		})
	}

	// whatever link they added in, throw in a post request with the id


	render() {
		return (
			<div>
				<Jumbotron className="banner">
					<span className="banner-text">codedrop</span>

					

				</Jumbotron>

				<div className="below-banner">
					<span className="below-banner-text">preparing <b className="blue-you">you</b> for camp</span>
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
									 <span className="home-terminal" onClick={this.setPad}><Link>  >_</Link></span>
								</div>
								
								{this.props.children}
							</Col>
						</Row>
					</Grid>
					<a className="a-home" href="/howitworks"><div className="home-works">How does it work?</div></a>
				</div>
			</div>
		)
	}
}

export default Home;
// have the page load in home.jsx
// render(<App/>, document.getElementById('app'));
