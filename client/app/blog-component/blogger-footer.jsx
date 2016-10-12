// the footer for each blogger-profile

import React from 'react';
import ReactDOM from 'react-dom';

class BloggerFooter extends React.Component {
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
			<div className="blogger-footer">
				<span className="footer-read-more">Read More HackReactor Entries</span>
			</div>
		)
	}

}

export default BloggerFooter;