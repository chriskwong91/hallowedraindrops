// State tree is redudant
// Change state with actions
//Action: plain javascript object describing change
  // min representation of change of data
// Only requirement is type property (use string as it is serializable)
// Components only need to dispatch action with type, and other information (id or text. etc)
// Every click, adding test, will all be actions
// State is read-only, to change state, need to dispatch action ( network request, user action)

/*
* action constants
*/

let nextTestId = 0;

/*
* action types
*/

// For Admin
export const CHALLENGE_PROMPT = 'CHALLENGE_PROMPT'
export const CHALLENGE_SRC_CODE = 'CHALLENGE_SRC_CODE'
export const CHALLENGE_TITLE = 'CHALLENGE_TITLE'
export const CHALLENGE_ADD_TEST = 'CHALLENGE_ADD_TEST'
export const CHALLENGE_MOD_TEST = 'CHALLENGE_MOD_TEST'
export const CHALLENGE_DIFFICULTY = 'CHALLENGE_DIFFICULTY'
// export const CHALLENGE_TESTS = 'CHALLENGE_TESTS'

//For Editor


// Editor Side Bar
export const GET_QUESTIONS = 'GET_QUESTIONS'


/*
* action creators
*/

/************************
* ACTIONS FOR SIDE BAR
************************/

export function questionsList (obj) {
  return { type: GET_QUESTIONS, obj};
}

/************************
* ACTIONS FOR CREATING CHALLENGES
************************/

export function challengePrompt (text) {
  return { type: CHALLENGE_PROMPT, text};
}

export function challengeSRCCode (text) {
  return { type: CHALLENGE_SRC_CODE, text};
}

export function challengeTitle (text) {
  return { type: CHALLENGE_TITLE, text};
}

export function challengeAddTest (obj) {
  return { type: CHALLENGE_ADD_TEST,
           id: nextTestId++,
           obj};
}

export function challengeTests (obj) {
  return { type: CHALLENGE_ADD_TEST,
           obj};
}

export function challengeModTest (obj) {
  return {type: CHALLENGE_MOD_TEST,
          obj};
}

export function challengeDifficulty (text) {
  return { type: CHALLENGE_DIFFICULTY, text};
}
