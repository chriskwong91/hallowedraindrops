import React from 'react';
import store from '../store/index';
import {challengeTitle, challengeDifficulty} from '../actions/index';
import {connect} from 'react-redux'
let state = store.getState;

const ChallengeInfo = props => {
  let handleChange = e => {
    var title = e.target.value;
    store.dispatch(challengeTitle(title));
  }

  let handleSelect = e => {
    var difficulty = e.target.value.slice(0, 1);
    store.dispatch(challengeDifficulty(difficulty));
  }

  return (
    <div>
      <div className='row challenge-info'>
        <div className="input-group input-group-lg col-md-4 col-md-offset-4">
          <label htmlFor="title" className='challenge-label'>Challenge Title</label>
          <input id="title" type="text" className="form-control" placeholder="Challenge Title" value={props.challengeTitle} onChange={handleChange}/>
        </div>
      </div>
      <div className="input-group input-group-lg row challenge-info col-md-4 col-md-offset-4">
        <label htmlFor="difficulty" className='challenge-label'>Difficulty</label>
        <div className ='input-group-lg'>
          <select onChange={handleSelect} className="form-control" id="difficulty" >
            <option></option>
            <option>1 (easy)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5 (hard)</option>
          </select>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        challengeTitle: state.newChallenge.challengeTitle
    }
}


//wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(ChallengeInfo)
// export default ChallengeInfo;
