// the footer for each blogger-profile

import React from 'react';
import ReactDOM from 'react-dom';

class ProfileFooter extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	// empty for snow
		// }
	}

	/*
	 * future iterations
	 - have it as a formal footer, but for now, just have it blue and redirect back to blog
	*/

	render() {
		return (
			<div className="profile-footer">
				<span className="footer-read-more">Back to Practice!</span>
			</div>
		)
	}

}

export default ProfileFooter;