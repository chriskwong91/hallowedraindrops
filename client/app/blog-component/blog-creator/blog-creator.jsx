// blog-creator will be used to create new blog-pages and add entries into blog
// THIS CAN BE AN ADMIN-ONLY PAGE SO UI ISN'T IMPORTANT

import React from 'react';
import ReactDOM from 'react-dom';

import FormControl from 'react-bootstrap/lib/FormControl.js';
import FormGroup from 'react-bootstrap/lib/FormGroup.js';
import ControlLabel from 'react-bootstrap/lib/ControlLabel.js';

import { Link } from 'react-router';

class BlogCreator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			questions: [
			 "Describe your experience at HackReactor in one word. (going to be title of your blog article)",
			 "Reflecting back, did HackReactor meet your expectations?",
			 "30 second shpeel on daily life at HackReactor.",
			 "Most memorable experience?",
			 "How do you feel about the technical skillset you've developed since studying at HackReactor?",
			 "Advice you'd give for future HackReactor applicants?",
			],
			questions_classes: [
				"Q1",
				"Q2",
				"Q3",
				"Q4",
				"Q5",
				"Q6"
			],
			questions_profile: [
				"What is your Name",
				"What is your linkedin?",
				"What were you doing prior to joining with HackReactor?",
				"How would you describe yourself in less than 140 characters",
				" *optional link to a banner image you want us to feature with your profile? (nyan cat, a nature photo, etc)",
			],
			profile_example: [
				"James Bond",
				"https://www.linkedin.com/in/jamesbonddc",
				"I was saving the world",
				"Ex-British Secret Sevice turned Software Engineer",
				"https://images.alphacoders.com/305/30521.jpg",
			],
			profile_classes: [
				"name",
				"linkedin",
				"past",
				"self_blurb",
				"banner_img",
			],
			completed_user_content: {},
			empty_obj: {}
		}
	}

	// need db to be hooked
	// need to make a request 
	componentDidMount() {
		console.log('the blog-creator component mounted');
		this.addContent.bind(this); // have the on-click setup
	}

	submitToDB() {
		console.log('about to submit to db');
		$.ajax({
			method: 'POST',
			url: 'http://localhost:8080/api/blog/post/',
			data: { data: this.state.completed_user_content },
			success: (data) => {
				console.log('data value submitted to the blog/testimonial database is: ', data);
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});

	}

	addContent () {
		// this is going to make a fetch request 
		console.log('clicked');

		var returnObj = this.state.empty_obj;
    // questions_classes
    for(var i = 0; i < this.state.questions_classes.length; i++) {
    	var idOfInterest = this.state.questions_classes[i];
    	returnObj[idOfInterest] = $('#' + idOfInterest).find('.form-control').val();
    }

    for(var j = 0; j < this.state.profile_classes.length; j++) {
    	var idOfInterest = this.state.profile_classes[j];
    	returnObj[idOfInterest] = $('#' + idOfInterest ).find('.form-control').val();
    }

    //send to server and process response
    this.setState({
    	completed_user_content: returnObj
    });

    this.submitToDB();
	}

	render() {
		return (
			<div>
				<span className="blog-selection-bootcamp-header">Please make sure you have authenticated your Github with us. We don't want you to forget and possibly have to re-type your answers. :-(</span>
				<br/>
				<br/>
				<div className="blog-profile-questions">
					<h1> Information About You. </h1>
					<div>
						{this.state.questions_profile.map((item, i) => {
							return (
								<div>
									<span className="blog-selection-experience">Question {i + 1} : {item}</span>
									<p className="blog-profile-example">Example: {this.state.profile_example[i]}</p>
									<div>
										<form id={this.state.profile_classes[i]}>
											<textarea className="form-control profile blog-selection-bootcamp" rows="2"> </textarea>
										</form>
									</div>
								</div>
								)
							})
						}
					</div>
				</div>

				<div className="blog-bootcamp-questions">
					<h1> Experience at HackReactor. </h1>

					{this.state.questions.map((item, i) => { 
						return (
							<div>
								<span className="blog-selection-experience">Question {i + 1}: {item}</span>
								<form id={this.state.questions_classes[i]}>
									<textarea className="form-control exp blog-selection-bootcamp"> </textarea>
								</form>
							</div>
						)
					})
					}
				</div>
				<div className="blogger-footer" onClick={this.addContent.bind(this)}>I'm Ready to Submit!</div>
			</div>
		)
	}
}

export default BlogCreator;