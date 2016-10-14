import React from 'react';
import { render } from 'react-dom';

class ProfileBody extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			problem: 'bubbleSort',
			javascript: [{'map': '', 'reduce': '', 'forEach': '', 'filter': ''}],
			general: [{'function' : '', 'if' : '', 'for': '', 'var': ''}],
			readability: [{'code_length': '', 'function_code_length': '', 'num_comments': '', 'indentation': ''}],
			functionality: [{'space' : '', 'speed' : ''}]
		}
	}

	componentDidMount() {
		this.checkNull = this.checkNull.bind(this);

		setTimeout(() => {
			this.setState({
				javascript: this.props.javascript,
				general: this.props.general,
				functionality: this.props.functionality,
				readability: this.props.readability
			});
		}, 500);
	}

	checkNull(val) {
		if(val === null) {
			return 0; // set the value displayed to be 0
		} else {
			return val; // else return the value
		}
	}

	render() {
		return(
			<div className="challenge-header">
				<div className="challenge-header-row">
					<div className="row">
						<div className="col-md-3 challenge-text-header">
						</div>
						<div className="col-md-6 challenge-title">
							<span>User Analytics</span>
						</div>
						<div className="col-md-3 challenge-text-header">
						</div>
					</div>
				</div>

				<div className="row challenge-middle">
					<div className="col-md-3"></div>
					<div className="col-md-6">For {this.state.problem}, you've solved it with:</div>
					<div className="col-md-3"></div>
				</div>

				<div className="row challenge-boxes">
					<div className="col-md-3 challenge-box-title">Functionality</div>
					<div className="col-md-4 challenge-details">space: {this.checkNull(this.state.functionality[0]['space'])} characters</div>
					<div className="col-md-4 challenge-details">speed: {this.checkNull(this.state.functionality[0]['speed'])} milisecond</div>
				</div>

				<div className="row challenge-boxes">
					<div className="col-md-3 challenge-box-title">Javascript</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.javascript[0]['map'])} map</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.javascript[0]['filter'])} filter</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.javascript[0]['forEach'])} forEach</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.javascript[0]['reduce'])} reduce</div>

				</div>

				<div className="row challenge-boxes">
					<div className="col-md-3 challenge-box-title">General</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.general[0]['function'])} function</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.general[0]['if'])} if-statements</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.general[0]['for'])} for-loops</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.general[0]['var'])} variables</div>

				</div>

				<div className="row challenge-boxes">
					<div className="col-md-3 challenge-box-title">Readability</div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.readability[0]['code_length'])}  words </div>
					<div className="col-md-2 challenge-details">{this.checkNull(this.state.readability[0]['num_comments'])} comments</div>
					<div className="col-md-2 challenge-details">Function to Code Ratio: {this.checkNull(this.state.readability[0]['function_code_length'])}</div>
					<div className="col-md-2 challenge-details">Identation Score: {this.checkNull(this.state.readability[0]['indentation'])}</div>
					
				</div>
		</div>
		)
	}

}

export default ProfileBody;