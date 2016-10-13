import React from 'react';
import Modal from './exampleModal.jsx'
import {Link} from 'react-router'

//Other Components
import Navigation from '../Admin/AdminNavigation.jsx';
import ChallengePrompt from '../Admin/ChallengePrompt.jsx';
import ChallengeInfoComp from '../Admin/ChallengeInfo.jsx';
import TestEntry from '../Admin/TestEntry.jsx';
import TestLayout from '../Admin/TestLayout.jsx';

import store from '../store/index';
let state = store.getState;

class ChallengeTechnical extends React.Component {
  constructor(props) {
    super(props);
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
          <h1>This can be anything</h1>
        </div>
      </div>

      <div className="challenge-splash-supporting row">
        <div className="col-md-2 col-md-offset-3">
          <Link to="/challenge/info" className="challenge-start"><div className="challenge-submit">Go Back</div></Link>
        </div>
        <div className="col-md-2 col-md-offset-2">
          <Link to="/challenge/submit" className="challenge-start"><div className="challenge-submit">Submit</div></Link>
        </div>
      </div>

    </div>
    )
  }
}


export default ChallengeTechnical;
