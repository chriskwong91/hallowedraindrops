import {combineReducers } from 'redux'
import { CHALLENGE_PROMPT, CHALLENGE_SRC_CODE,
          CHALLENGE_TITLE, CHALLENGE_ADD_TEST,
          CHALLENGE_DIFFICULTY, CHALLENGE_MOD_TEST} from '../actions/index'

function challengePrompt(state = '', action) {
  switch(action.type) {
    case CHALLENGE_PROMPT:
      return action.text;
    default:
      return state;
  }
}

const editor = combineReducers({

});

export default editor
