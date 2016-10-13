import React from 'react';
import Modal from './exampleModal.jsx'
import {Link} from 'react-router'

//Other Components
import Navigation from '../Admin/AdminNavigation.jsx';
import ChallengeAnswer from '../Admin/ChallengeAnswer.jsx'
import TestEntry from '../Admin/TestEntry.jsx';
import TestLayout from '../Admin/TestLayout.jsx';

import store from '../store/index';
let state = store.getState;

class ChallengeTechnical extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
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
    console.log(body);
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/admin/challenge/' + state().newChallenge.challengeTitle,
      data: body,
      success: (data) => {
        console.log('Success!', data);
        this.pasteConsole(JSON.parse(data));
      },
      error: (error) => {
        console.log('Error in posting question', error);
      }
    });
  }

  pasteConsole(data) {
    var passed = data.passedTests;
    var failed = data.failedTests;

    console.log(passed, 'passed');
    console.log(failed, 'failed');

  }

  render() {
    return (
    <div>
      <Navigation> </Navigation>
      <div className='row jumbotron challenge-info'>
        <h1 className="blog-selection-header">Create Tests and Answers.</h1>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <TestLayout />
        </div>
        <div className='col-md-5'>
        <label htmlFor="comment" className='challenge-label'>Challenge Answer Code: </label>
          <ChallengeAnswer />
        </div>
      </div>

      <div className="challenge-splash-supporting row">
        <div className="col-md-2 col-md-offset-3">
          <Link to="/challenge/info" className="challenge-start"><div className="challenge-submit">Go Back</div></Link>
        </div>
        <div className="col-md-2 col-md-offset-2">
          <Link to="/challenge/technical" className="challenge-start"><div onClick={this.handleSubmit.bind(this)}className="challenge-submit">Submit</div></Link>
        </div>
      </div>

    </div>
    )
  }
}


export default ChallengeTechnical;
