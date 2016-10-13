import React from 'react';
import { render } from 'react-dom';

class Profile extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			github: ''
		}

	}

	// a pull to the db for that specific user
	// the users' name will be on the url

	componentDidMount() {
		this.getUserAnalytics = this.getUserAnalytics.bind(this);
	}

	// this is copied over from editor.jsx -- so code isn't dry here
	getGithubName() {
	  // you'd use this to get the github id on the session
	  $.ajax({
	    method: 'GET',
	    url: 'http://localhost:8080/auth/github_user',
	    success: (data) => {
	      var x = JSON.stringify(data);
	      var userIndex = x.search(/username/) + 13;
	      var profileIndex = x.search(/profileUrl/);
	      var sliced = x.slice(userIndex,profileIndex);
	      var slicedIndex = (/[\W]/g).exec(sliced);
	      var final = sliced.slice(0, slicedIndex.index);
	      this.setState({
	        github: final
	      });
	    },
	    error: (jqXHR, textStatus, errorThrown) => {
	      console.log(textStatus, errorThrown, jqXHR);
	    }
	  })
	}

	getUserAnalytics() {
		// $.ajax({
		// 	method: 'GET',
		// 	url: 'http://localhost:4000/api/analytics' 
		// });
	}

	render() {
		return (
			<div>
			</div>

		)
	}

}

export default Profile;