import React from 'react';
import ReactDOM from 'react-dom';
import BlogNavigation from './blog-navigation.jsx';

// react-router elements
import { Link } from 'react-router';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Media from 'react-bootstrap/lib/Media.js';

class Blog extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			users: ['brianz', 'chris', 'thai'], // the users who have pages
			allBlogs: [], // blogs is an array
			allGithub: [],
		}
	}

	componentDidMount () {
		console.log('entered into the blog page');
		this.getAllBlogs(); // call it for all of the data
		this.getAllGithub();
		// items we need are:
			// github_url
			// avatar_url
			// login
	}

	/* @name: getAllGithub
	 * @input: n/a
	 * @output: A call to the DB to get all github data and set into allGithub
	 */ 

	getAllGithub() {
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/api/blog/getallgithub/',
			success: (data) => {
				console.log('all blogs have been retrieved: ', data);
				this.setState({
					allGithub: data
				});
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}

	/* @name: getAllBlogs
	 * @input: n/a
	 * @output: A call to the DB to get all Blog data and set into allBlogs
	 */ 

	getAllBlogs() {
		/* a fetch to get all blogs from our DB */
		$.ajax({
			method: 'GET',
			url: 'http://localhost:8080/api/blog/getall/',
			success: (data) => {
				console.log('all blogs have been retrieved: ', data);
				this.setState({
					allBlogs: data
				});
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
		// order them by their number of views
	}


	// this will purely hold all of the links to the blogger pages

	/*
	   ** in the future, we can have a filter section
	*/

	/* Styles 
		.blog-selection-header     : Title of their post
		.blog-selection-name       : Extra fun snippet
		.blog-selection-bootcamp   : "Name"@"Bootcamp"
		.blog-selection-link       : Used to allow element to be clickable, but no style changes
	*/

	/* test grid:
		<BlogNavigation></BlogNavigation>
			<Grid>
				<Row>
					<Col lg ={12}>
						<Jumbotron className="banner-blog"></Jumbotron>
						<h1 className="banner-text-blog">BootCamp Reviews</h1>
					</Col>
				</Row>
			</Grid>
	*/

	render () {
		// console.log(this.state.allGithub[0][avatar_url]);
		return (
			<div className="blog-page">
				<BlogNavigation></BlogNavigation>
					<Jumbotron className="banner-blog"></Jumbotron>
					<h1 className="banner-text-blog">BootCamp Reviews</h1>
						<Grid>
							{this.state.allBlogs.map((user, i) => 
								<Row>
									<Col>
										<Media.List>
											<a className="blog-selection-link" href={"/blog/" + this.state.allGithub[i]['login']}><Media.ListItem className="blog-selection blog-outline">
												<Media.Body>
													<Media.Heading className="blog-selection-header">{user.Q1}</Media.Heading>
														<span className="blog-selection-bootcamp">{user.name} @ {user.bootcamp}</span>
														<br/>
														<br/>
														<span className="blog-selection-name">{user.self_blurb}</span>
												</Media.Body>
												<Media.Right>
													<Image src={this.state.allGithub[i]['avatar_url']} width={64} height={64} circle/>
												</Media.Right>
											</Media.ListItem></a>
										</Media.List>
									</Col>
								</Row>
							)}
						</Grid>
			</div>
		)
	}

}

export default Blog;

/*<div className="blog-page">
				<BlogNavigation></BlogNavigation>
					<Jumbotron className="banner-blog"></Jumbotron>
					<h1 className="banner-text-blog">BootCamp Reviews</h1>
						<Grid>
							{this.state.blogs.map((user) => 
								<Row>
									<Col>
										<Media.List>
											<a className="blog-selection-link" href="/blog/brian"><Media.ListItem className="blog-selection blog-outline">
												<Media.Body>
													<Media.Heading className="blog-selection-header">A Difficult, but Very Humbling 12 Weeks</Media.Heading>
														<span className="blog-selection-bootcamp">Brian Zhou @ HackReactor </span>
														<br/>
														<br/>
														<span className="blog-selection-name">Here could be a 140 character tagline (insertion of twitter handle, pickup line, etc. etc.) ...</span>
												</Media.Body>
												<Media.Right>
													<Image src="https://avatars.githubusercontent.com/u/5092263?v=3" width={64} height={64} circle/>
												</Media.Right>
											</Media.ListItem></a>
										</Media.List>
									</Col>
								</Row>
							)}
						</Grid>
			</div>*/
