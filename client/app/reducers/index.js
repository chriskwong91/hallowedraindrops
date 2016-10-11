import { combineReducers } from 'redux'
import newChallenge from './admin'
import sideBar from './sideBar'

const codeDropApp = combineReducers({
  newChallenge,
  sideBar
})

export default codeDropApp
