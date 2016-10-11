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
      <form>
        <div className="form-group row">
          <label htmlFor="challenge-title" className="col-xs-2 col-form-label">Challenge Title</label>
          <div className="col-xs-8">
            <input className="form-control" type="text" placeholder="Challenge Name" value={props.challengeTitle} onChange={handleChange} id="challenge-title"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="difficulty" className='col-xs-2 col-form-label'>Difficulty</label>
          <div className ='col-xs-3'>
            <select onChange={handleSelect}className="form-control" id="difficulty" >
              <option>1 (easy)</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 (hard)</option>
            </select>
          </div>
        </div>
      </form>
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
