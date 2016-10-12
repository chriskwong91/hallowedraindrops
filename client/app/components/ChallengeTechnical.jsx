import React from 'react';
import MyEditor from './Editor.jsx'
import Modal from './exampleModal.jsx'

//Other Components
import Navigation from '../Admin/AdminNavigation.jsx';
import ChallengePrompt from '../Admin/ChallengePrompt.jsx';
import ChallengeInfoComp from '../Admin/ChallengeInfo.jsx';

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
        <h1 className="blog-selection-header">Enter Challenge Information.</h1>
      </div>
      <ChallengeInfoComp />
      <div className='col-md-6 col-md-offset-3'>
        <label htmlFor="comment" className='challenge-label'>Prompt: </label>
        <Modal />
        <ChallengePrompt />
      </div>
      <div className="challenge-splash-supporting row">
        <div className="col-md-4 col-md-offset-4">
          <a href="#" className="challenge-start"><div className="challenge-footer">Next Step</div></a>
        </div>
      </div>

    </div>
    )
  }
}


export default ChallengeTechnical;
