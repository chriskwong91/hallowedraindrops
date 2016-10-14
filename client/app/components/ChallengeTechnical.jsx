import React from 'react';
import Modal from './exampleModal.jsx'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'

//Other Components
import Navigation from '../Admin/AdminNavigation.jsx';
import ChallengeAnswer from '../Admin/ChallengeAnswer.jsx'
import TestEntry from '../Admin/TestEntry.jsx';
import TestLayout from '../Admin/TestLayout.jsx';
import Console from '../output.jsx';

import store from '../store/index';
let state = store.getState;


class ChallengeTechnical extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      console: null,
      testsPassed: false,
    }

    this.contextTypes = {
      router: React.PropTypes.object.isRequired
    }
  }

  componentDidMount() {
    this.startConsole();
  }

  startConsole () {
    // move jqconsole out
    var jqconsole = $('#challenge-console').jqconsole('\n', '>>>');

    this.setState({
      console: jqconsole
    });

    // jqconsole setup
    $(function () {
        var startPrompt = function () {
        // Start the prompt with history enabled.
        jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        jqconsole.Write(input + '\n', 'jqconsole-output');
        // Restart the prompt.
        startPrompt();
        });
      };
    startPrompt();
    });
  }

  handleSubmit(){
    if (this.state.testsPassed) {
      window.location.assign("/challenge/submit");
    } else {
      this.runTests();
    }
  }

  runTests() {
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
    var passes = passed.length;
    var fails = failed.length;

    if (!failed.length) {
      var pass = 'All Tests Passed! \n Challenge has been added to the database';
      this.state.console.Write(pass + '\n', 'my-output-class');
      this.setState({
        testsPassed: true
      });
    } else {
      this.setState({
        testsPassed: false
      });

      var fail = 'Oh No! ' + fails.toString() + ' out of ' + (passes + fails).toString() +  ' tests did not pass! \n\n';

      failed.forEach((test) => {
        fail += 'Test #' + test.order_counter.toString() + ' failed!\n';
        fail += test.errs.message + "\n\n";
      });
      this.state.console.Write(fail + '\n', 'my-output-class');
    }

  }

  render() {
    return (
    <div className='container'>
      <Navigation> </Navigation>
      <div className='row jumbotron challenge-info'>
        <h1 className="blog-selection-header">Create Tests and Answers.</h1>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <TestLayout />
        </div>
        <div className='col-md-5'>
          <div classNAme='row'>
            <label htmlFor="comment" className='challenge-label'>Challenge Answer Code: </label>
            <ChallengeAnswer />
            <button onClick={this.runTests.bind(this)} type="button" className="btn btn-default row">
              <span className='glyphicon glyphicon-play'></span>Run Tests
            </button>
          </div>
          <div className='console-container row'>
            <div id='challenge-console' className='challenge-console'></div>
          </div>
        </div>
      </div>

      <div className="challenge-splash-supporting challenge-technical-buttons row">
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
