import { createStore } from 'redux'
import codeDropApp from '../reducers/index'

let store = createStore(codeDropApp);

// Following is test for the store
// import {challengePrompt, challengeSRCCode, challengeTitle, challengeAddTest, challengeTests } from '../actions/index';

// console.log(store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState()));

// // store.dispatch(challengePrompt('this is the prompt'));
// // store.dispatch(challengeSRCCode('this is the code'));
// // store.dispatch(challengeTitle('this is the title'));
// store.dispatch(challengeTests({
//   snippet: 'snip',
//   method: 'here',
//   answer: 'ans'
// }));
// // store.dispatch(challengePrompt('this is the prompt 2'));

// unsubscribe();
export default store;
