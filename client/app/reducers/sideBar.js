import {combineReducers } from 'redux'
import { GET_QUESTIONS} from '../actions/index'

function questionsList(state = [], action) {
  switch(action.type) {
    case GET_QUESTIONS:
      return action.obj;
    default:
      return state;
  }
}

const sideBar = combineReducers({
  questionsList
});

export default sideBar
