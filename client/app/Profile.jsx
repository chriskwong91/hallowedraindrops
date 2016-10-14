import React from 'react';
import { render } from 'react-dom';

import Navigation from './navigation.jsx'
import ProfileHeader from './ProfileHeader.jsx';
import ProfileBody from './ProfileBody.jsx';

import ProfileFooter from './ProfileFooter.jsx';


class Profile extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			github: '',
			javascript: [], // items below here are in regards to analytics
			functionality: [],
			general: [],
			readability: [],
			user: ''
		}

	}

	// a pull to the db for that specific user
	// the users' name will be on the url

	componentDidMount() {
		// this.getGithubName = this.getGithubName.bind(this);
		this.getUserAnalytics = this.getUserAnalytics.bind(this);
		this.getUrl = this.getUrl.bind(this);
		this.getGithub = this.getGithub.bind(this);

		this.getUrl();

		setTimeout(() => {
			this.getUserAnalytics();
		}, 500)
	}

	// this is copied over from editor.jsx -- so code isn't dry here
	// getGithubName() {
	  // you'd use this to get the github id on the session
	//   $.ajax({
	//     method: 'GET',
	//     url: 'http://localhost:8080/auth/github_user',
	//     success: (data) => {
	//     	console.log('data value is:', data);
	//       var x = JSON.stringify(data);
	//       var userIndex = x.search(/username/) + 13;
	//       var profileIndex = x.search(/profileUrl/);
	//       var sliced = x.slice(userIndex,profileIndex);
	//       var slicedIndex = (/[\W]/g).exec(sliced);
	//       var final = sliced.slice(0, slicedIndex.index);
	//       this.setState({
	//         github: final
	//       });
	//       console.log('value for tgithub is: ', this.state.github);
	//     },
	//     error: (jqXHR, textStatus, errorThrown) => {
	//       console.log(textStatus, errorThrown, jqXHR);
	//     }
	//   })
	// }

	getUrl() {
		var url = window.location.pathname.slice(9, window.location.pathname.length);
		setTimeout(() => {
			this.setState({
				user: url
			});
			this.getGithub();
		}, 100)
	}

	getGithub() {
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

	getUserAnalytics() {

		// we'll be making 4 analytic calls
		// can be coded better
		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.user + '/javascript',
			success: (data) => {
				this.setState({
					javascript: this.state.javascript.push(data)
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});

		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.user + '/general',
			success: (data) => {
				this.setState({
					general: this.state.general.push(data)
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});

		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.user + '/functionality',
			success: (data) => {
				this.setState({
					functionality: this.state.functionality.push(data)
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});

		$.ajax({
			method: 'GET',
			url: 'http://localhost:4000/api/analytics/' +  this.state.user + '/readability',
			success: (data) => {
				this.setState({
					readability: this.state.readability.push(data)
				})
			},
			error: (jqXHR, textStatus, errorThrown) => {
			  console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}


	/* for the ProfileHeader, we only need to pass one of the 4 tables down to get the problems the user completed */
	render() {
		return (
			<div> 
				<Navigation></Navigation>
				<div>
					<ProfileHeader github={this.state.github} analytics={this.state.getUserAnalytics}></ProfileHeader>
				</div>
				<ProfileBody javascript={this.state.javascript} general={this.state.general} functionality={this.state.functionality} readability={this.state.readability} ></ProfileBody>
				<ProfileFooter></ProfileFooter>
			</div>

		)
	}

}

export default Profile;