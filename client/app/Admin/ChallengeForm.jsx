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

import store from '../store/index';
let state = store.getState;

const ChallengeForm = props => {

  let handleSubmit = () => {
    var question = {
      name: state().newChallenge.challengeTitle,
      difficulty: state().newChallenge.challengeDifficulty,
      attempts: 0,
      answers: 0,
      prompt: state().newChallenge.challengePrompt,
    };

    var body = {
      question: question,
      varArry: state().newChallenge.challengeTests,
      sourceCode: state().newChallenge.challengeSRCCode,
    };
    console.log('sending this body of info to test server', body);
    addChallenge(body);
  }

  let addChallenge = body => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/admin/challenge/' + state().newChallenge.challengeTitle,
      data: body,
      success: (data) => {
        console.log('Success!', data);
      },
      error: (error) => {
        console.log('Error in posting question', error);
      }
    });
  }

  return (
    <div>
        <PageHeader>Add a new challenge!</PageHeader>
        <button onClick={handleSubmit} type="button" className="btn btn-outline-primary">Submit Challenge</button>
         <div id="page-content-wrapper">
          <Grid>
            <Col sm={6} md={6}>
              <TestLayout />
            </Col>
            <Col sm={6} md={6}>
              <Row>
                <Col sm={6} md={12}>
                  <ChallengePrompt />
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={12}>
                  <ChallengeAnswer />
                </Col>
              </Row>
            </Col>
          </Grid>
        </div>
    </div>
  );

}

export default ChallengeForm;
