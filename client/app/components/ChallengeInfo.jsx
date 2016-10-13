import React from 'react';
import Modal from './exampleModal.jsx'
import {Link} from 'react-router'

//Other Components
import Navigation from '../Admin/AdminNavigation.jsx';
import ChallengePrompt from '../Admin/ChallengePrompt.jsx';
import ChallengeInfoComp from '../Admin/ChallengeInfo.jsx';

import store from '../store/index';
let state = store.getState;

class ChallengeInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var exampleBody = "/**\n * Write a function that, given a string, Finds the longest run of identical\n * characters and returns an array containing the start and end indices of\n * that run. If there are two runs of equal length, return the first one.\n * For example:\n *\n *   longestRun(\"abbbcc\") // [1, 3]\n *   longestRun(\"aabbc\")  // [0, 1]\n *   longestRun(\"abcd\")   // [0, 0]\n *   longestRun(\"\")       // [0, 0]\n *\n * Try your function with long, random strings to make sure it handles large\n * inputs well.\n */\n\nvar longestRun = function (string) {\n  // TODO: Your code here!\n };"
    var body = <pre id='pre' rows='20' className='pre-scrollable'>{exampleBody}</pre>
    return (
    <div>
      <Navigation> </Navigation>
      <div className='row jumbotron challenge-info'>
        <h1 className="blog-selection-header">Challenge Information.</h1>
      </div>
      <ChallengeInfoComp />
      <div className='col-md-6 col-md-offset-3'>
        <label htmlFor="comment" className='challenge-label'>Prompt: </label>
        <Modal title={'Challenge Prompt Example'} body={body} />
        <ChallengePrompt />
      </div>
      <div className="challenge-splash-supporting row">
        <div className="col-md-4 col-md-offset-4">
          <Link to="/challenge/technical" className="challenge-start"><div className="challenge-footer">Next Step</div></Link>
        </div>
      </div>

    </div>
    )
  }
}


export default ChallengeInfo;
