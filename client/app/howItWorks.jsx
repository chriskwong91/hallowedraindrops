import React from 'react';
import { render } from 'react-dom';

// import Navigation from './navigation.jsx';
import NonCodeNavigation from './NonCodeNavigation.jsx';


class HowItWorks extends React.Component {

	render() {
		return (
			<div>
				<div className="container how-header">
					<span>So you want to join a Bootcamp?</span>
				</div>
					<div className="banner-bottom" id="home-bottom">
						<div className="how-bottom">
							<div className = "home-desc"> We understand preparing for a bootcamp can be difficult. Resarch is often the first part of the Bootcamp process, but it's often the most tedious. Whether it be finding materials to study or seeking relevant coding problems to solve, accurate and helpful information are a hassle to locate.
							</div>
						<br/>
						<br/>
							<div className ="home-desc">Codedrop helps fill this content gap. We work with many industry experts to devise the most up-to-date, relevant problems that'll help you guage where you are in your studying process. Questions like, "Am I up to par with Algorithms?", "How much more do I need to know about Closures?", and "What Javascript abstractions do I need to brush up on" can be easily answered by seeing how well you fare against the many problems and tests we've set up. 
							</div>
						<br/>
						<br/>
							<div className ="home-desc">But let's say you need help, or you are simply looking for someone else to work through a problem with. And all of your friends are at work, and nobody else you know can help. No need to fret. Codedrop's Pair Programming feature allows you to queue up in our Partners Lobby to find others who are ready and willing to work alongside you. 
							</div>
						<br/>
						<br/>
					</div>
				</div>
				<div className="how-bott">
					<div className ="how-desc how-desc-bott">Codedrop was built with the purpose to help others get into coding bootcamps. <br/>Get started by trying some of our challenges, or continue researching by digging through our blog-bank of bootcamp experiences written up by their respective alumnis.
					</div>
					<div>
						<a className ="a-home" href="/blog"><div className ="how-links how-left">Read Bootcamp Reviews</div></a> 
						<a className ="a-home" href="/"><div className ="how-links how-right">Solve Bootcamp-Like Coding Challenges</div></a>
					</div>
				</div>
			
			</div>

		)
	}
}

export default HowItWorks;