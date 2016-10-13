import React from 'react';
import store from '../store/index';
import {challengeSRCCode} from '../actions/index';
import {connect} from 'react-redux'

let state = store.getState;
/*
   User inputs the source code when creating new challenge
 */

class ChallengeAnswer extends React.Component{
  constructor(props) {
    super(props);

    /*
     * @textform: State of text of edit mode or <code> mode
    */
    this.state = {
      textform: true,
    };

  }

  /**
   * @name handleSave
   * @desc Sets the input code to the state, sends the code up to the form,
   *    and changes edit mode to <code> mode
   * @param none
   * @returns {nothing}
   */
  handleSave() {
    $('#saveAnswer').toggleClass("hide");
    $('#editAnswer').toggleClass("hide");
    var text = this.refs.textarea.value;

    store.dispatch(challengeSRCCode(text));
    this.setState({
      textform: false
    });
  }

  /**
  * @name handleEdit
  * @desc Reveals save button and switches to edit mode
  * @param none
  * @returns {nothing}
  */
  handleEdit() {
    $('#saveAnswer').toggleClass("hide");
    $('#editAnswer').toggleClass("hide");
    this.setState({
      textform: true
    });

  }

  /**
  * @name handlePaste
  * @desc when user pastes code, the textarea becomes a <code> box
  * @param none
  * @returns {nothing}
  */
  handlePaste(e) {
    // Set Timeout gives a little time for code to be pasted onto the screen
    setTimeout(function () {
      var text = this.refs.textarea.value;
      store.dispatch(challengeSRCCode(text));

      this.setState({
        textform: false,
      });
    }.bind(this), 100)

    $('#saveAnswer').toggleClass("hide");
    $('#editAnswer').toggleClass("hide");
  }

  /**
  * @name handleChange
  * @desc Updates the state of the text in the textarea
  * @param none
  * @returns {nothing}
  */
  handleChange(e) {
    store.dispatch(challengeSRCCode(e.target.value));
  }

  render() {
    var textbox = (this.state.textform ?
          <textarea placeholder="Paste Challenge Answer Here"
            onPaste={this.handlePaste.bind(this)} onChange={this.handleChange.bind(this)} className="form-control challenge-info" rows="14"
            id="comment" ref='textarea' value={this.props.challengeAnswer}></textarea> :
          <pre id='pre' className='pre-scrollable'>{state().newChallenge.challengeSRCCode}</pre>)

    return (
      <form>
        <div className="form-group">
          {textbox}
          <button id='saveAnswer' onClick={this.handleSave.bind(this)} className="btn btn-default" type="button">Save</button>
          <button id='editAnswer' onClick={this.handleEdit.bind(this)} className="btn btn-default hide" type="button">Edit</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        challengeAnswer: state.newChallenge.challengeAnswer
    }
}


//wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(ChallengeAnswer)

// export default ChallengeAnswer;
