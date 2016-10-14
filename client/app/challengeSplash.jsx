import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import store from './store/index.js';

import Navigation from './navigation.jsx';

class ChallengeSplash extends React.Component {

	// the <a> wrap around the "Start" button should load the next step

	// Notes:
	// <p> Devise complex challenges that'll reign supreme among the Community.</p>
	render() {
		console.log(store.getState());
		return (
			<div>
				<Navigation> </Navigation>
				<div className="jumbotron challenge-splash-jumbo">
					<h1 className=".blog-selection-header">Become a Test Master.</h1>
				</div>
				<br/>
				<div className="challenge-splash-supporting row challenge-sub">
					<div className="col-md-6 challenge-sub col-md-push-3">
						<p> "I built a test once. It was awesome." - Thai Wong</p>
					</div>
				</div>
				<br/>
				<div className="challenge-splash-supporting row">
					<div className="col-md-4 col-md-offset-4">
						<p> Build a challenge by entering the logistics of your problem, selecting unique test cases, then releasing for testing! </p>
					</div>
				</div>
				<br/>
				<br/>
				<div className="challenge-splash-supporting row">
					<div className="col-md-4 col-md-offset-4">
						<Link to="/challenge/info" className="challenge-start"><div className="challenge-footer">Start</div></Link>
					</div>
				</div>
			</div>
		)
	}
}

export default ChallengeSplash;
