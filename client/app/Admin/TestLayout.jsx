import React from 'react';
import ChallengeInfo from './ChallengeInfo.jsx';
import TestEntry from './TestEntry.jsx';
import Modal from '../components/exampleModal.jsx'

//React Bootstrap
import PageHeader from 'react-bootstrap/lib/PageHeader.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

//Redux
import store from '../store/index';
import {challengeTests} from '../actions/index';

class TestingLayout extends React.Component{
  constructor(props) {
    super(props);

    //This state is used to map the individual test on the screen
    this.state = {
      tests: [<TestEntry key={0} num={0}/>],
    };
  }

  handleNewTest() {
    var length = store.getState().newChallenge.challengeTests.length;

    var test = <TestEntry key={length} num={length} />;

    var tests = this.state.tests.slice();
    tests.push(test);
    this.setState({
      tests: tests
    });
  }

  // <Row>
  //   <Col sm={6} md={12}>
  //     <ChallengeInfo />
  //   </Col>
  // </Row>
  render() {
    var body = <div><img className='challengeSS' src='../styling/img/challenge.png' /></div>
    return (
      <div>

        <div>
          <h3>Test Cases</h3><Modal title={'Example Tests'} body={body}/>
        </div>

        <form>
          <div className='container'>
            <p className='test-label col-md-2'>Snippet</p>
            <p className='test-label col-md-2'>Method</p>
            <p className='test-label col-md-2'>Answer</p>
          </div>
          {this.state.tests.map((test) => (
            test
            ))}
        </form>
        <button onClick={this.handleNewTest.bind(this)} type="button" className="btn btn-default">
          <span className='glyphicon glyphicon-plus'></span>
        </button>

      </div>
    );
  }
}

export default TestingLayout;
