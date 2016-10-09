import React from 'react';

//Other Components
import Navigation from './AdminNavigation.jsx';
import ChallengePrompt from './ChallengePrompt.jsx';
import ChallengeAnswer from './ChallengeAnswer.jsx';
import TestLayout from './TestLayout.jsx';

//React Bootstrap
import PageHeader from 'react-bootstrap/lib/PageHeader.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';


export default class ChallengeForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      prompt: '',
      tests: [],
      sourceCode: '',
      info: {
        title: '',
        difficulty: '1'
      },
    };
  }

  componentDidMount() {
  }

  handlePrompt(code) {
    this.setState({
      prompt: code
    });
  }

  handleTests(tests) {
    this.setState({
      tests: tests
    });
  }

  handleSourceCode(code) {
    this.setState({
      sourceCode: code
    });
  }

  handleChallengeInfo(info) {
    this.setState({
      info: info
    });
  }

  handleSubmit() {
    console.log('state to send', this.state);
    var question = {
      name: this.state.info.title,
      difficulty: this.state.info.difficulty,
      attempts: 0,
      answers: 0,
      prompt: this.state.prompt,
    };

    var body = {
      question: question,
      varArry: this.state.tests,
      sourceCode: this.state.sourceCode
    };
    this.addChallenge(body);
  }

  addChallenge(body) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/admin/challenge/' + this.state.info.title,
      data: body,
      success: (data) => {
        console.log('Success!', data);
      },
      error: (error) => {
        console.log('Error in posting question', error);
      }
    });
  }

  render() {
    return (
      <div>
        <PageHeader>Add a new challenge!</PageHeader>
        <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-outline-primary">Submit Challenge</button>
         <div id="page-content-wrapper">
          <Grid>
            <Col sm={6} md={6}>
              <TestLayout handleInfo={this.handleChallengeInfo.bind(this)} handleTests={this.handleTests.bind(this)}/ >
            </Col>
            <Col sm={6} md={6}>
              <Row>
                <Col sm={6} md={12}>
                  <ChallengePrompt handlePrompt={this.handlePrompt.bind(this)} />
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={12}>
                  <ChallengeAnswer handleSourceCode={this.handleSourceCode.bind(this)}/>
                </Col>
              </Row>
            </Col>
          </Grid>
        </div>
      </div>
    );
  }
}
