import React from 'react';
import { render } from 'react-dom';

class Profile extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			github: '',
			javascript: [], // items below here are in regards to analytics
			functionality: [],
			general: [],
			readability: []
		}

	}

	// a pull to the db for that specific user
	// the users' name will be on the url

	componentDidMount() {
		this.getGithubName = this.getGithubName.bind(this);
		this.getUserAnalytics = this.getUserAnalytics.bind(this);

		this.getGithubName();
		console.log('github name valu eis: ', this.state.github);

		// This will need to change as well
		setTimeout(() => {
			this.getUserAnalytics();
		}, 500)
	}

	// this is copied over from editor.jsx -- so code isn't dry here
	getGithubName() {
	  // you'd use this to get the github id on the session
	  $.ajax({
	    method: 'GET',
	    url: 'http://localhost:8080/auth/github_user',
	    success: (data) => {
	    	console.log('data value is:', data);
	      var x = JSON.stringify(data);
	      var userIndex = x.search(/username/) + 13;
	      var profileIndex = x.search(/profileUrl/);
	      var sliced = x.slice(userIndex,profileIndex);
	      var slicedIndex = (/[\W]/g).exec(sliced);
	      var final = sliced.slice(0, slicedIndex.index);
	      this.setState({
	        github: final
	      });
	      console.log('value for tgithub is: ', this.state.github);
	    },
	    error: (jqXHR, textStatus, errorThrown) => {
	      console.log(textStatus, errorThrown, jqXHR);
	    }
	  })
	}

	getUserAnalytics() {

		// we'll be making 4 analytic calls
		// can be coded better
		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.github + '/javascript',
			success: (data) => {
				console.log('data gotten back from analytics is: ', data);
				this.setState({
					javascript: data
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});

		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.github + '/general',
			success: (data) => {
				console.log('data gotten back from analytics is: ', data);
				this.setState({
					general: data
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});

		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.github + '/functionality',
			success: (data) => {
				console.log('data gotten back from analytics is: ', data);
				this.setState({
					functionality: data
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});

		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.github + '/readability',
			success: (data) => {
				console.log('data gotten back from analytics is: ', data);
				this.setState({
					readability: data
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}

	render() {
		return (
			<div>
				Hello World
			</div>

		)
	}

}

export default Profile;