import React from 'react';

//Redux
import store from '../store/index';
import {challengeAddTest, challengeTests, challengeModTest} from '../actions/index';

class TestEntry extends React.Component{
  constructor(props) {
    super(props);

    this.option = [
        'shouldExist',
        'shouldNotExist',
        'shouldThrowError',
        'shouldNotThrowError',
        'shouldEqual',
        'shouldNotEqual',
        'deepEqual',
        'isAString',
        'isAnArray',
        'isAnObject',
        'isANull',
        'isAUndefined',
        'isAnError',
        'isAPromise',
        'isTruthy',
        'isNotTruthy',
        'isTrue',
        'isNotTrue',
        'isFalse',
        'isNotFalse',
        'isUndefined',
        'isNotUndefined',
        'isNull',
        'isNotNull',
        'isNaN',
        'isNotNaN',
        'isExist',
        'isEmpty',
        'isEql',
        'isNotEql',
        'isArguments',
        'isDeeplyEqual',
        'isNotDeeplyEqual',
        'isAbove',
        'isBelow',
        'isAtLeast',
        'isAtMost',
        'isWithin',
        'isInstanceof',
        'isProperty',
        'isDeepProperty',
        'isOwnProperty',
        'isOwnPropertyDescriptor',
        'isWithinLength',
        'isBelowLength',
        'isAboveLength',
        'isNotLengthOf',
        'isLengthOf',
        'willNotMatchRegex',
        'willMatchRegex',
        'doesNotHaveString',
        'doesHaveString',
        'doesNotContainAllKeys',
        'doesNotContainAnyKeys',
        'doesContainAllKeys',
        'doesContainAnyKeys',
        'isNotResponding',
        'isResponding',
        'isNotRespondingToItself',
        'isRespondingToItself',
        'isSatisfying',
        'isNotSatisfying',
        'isNotCloseTo',
        'isCloseTo',
        'isNotMembers',
        'isMembers',
        'isNotExtensible',
        'isExtensible',
        'isSealed',
        'isFrozen'
      ];
  }

  componentDidMount() {
    store.dispatch(challengeTests({
      id: this.props.num,
      snippet: '',
      method: '',
      answer: ''
    }));
  }

  handleMethod (e) {
    var method = e.target.value;
    store.dispatch(challengeModTest({
      id: this.props.num,
      method: method
    }));
  }

  handleSnippet(e) {
    var snippet = e.target.value;
    store.dispatch(challengeModTest({
      id: this.props.num,
      snippet: snippet
    }));

  }

  handleAnswer(e) {
    var answer = e.target.value;

    store.dispatch(challengeModTest({
      id: this.props.num,
      answer: answer
    }));
  }

  renderOption(option) {
    return (
      <option>{option}</option>
    );
  }

  render() {
    console.log(store.getState());
    return (
      <div className="form-group">
        <div className="form-group">
          <div className="col-xs-4">
            <input className="form-control" onChange={this.handleSnippet.bind(this)} type="text" placeholder="fn(arguments)" id="snippet"/>
          </div>
        </div>
        <div className="form-group">
          <div className='col-xs-4'>
            <select onChange={this.handleMethod.bind(this)}className="form-control" id="method">
              <option></option>
              {this.option.map(this.renderOption.bind(this))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-4">
            <input className="form-control" onChange={this.handleAnswer.bind(this)} type="text" placeholder="4" id="answer"/>
          </div>
        </div>
      </div>
    );
  }
};

export default TestEntry;
