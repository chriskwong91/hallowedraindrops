import React from 'react';
import store from '../store/index';
import {challengePrompt} from '../actions/index';
import {connect} from 'react-redux'

let state = store.getState;

class ChallengePrompt extends React.Component{
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
    var text = this.refs.textarea.value;
    store.dispatch(challengePrompt(text));

    this.setState({
      textform: false
    });
    $('#savePrompt').toggleClass("hide");
    $('#editPrompt').toggleClass("hide");
  }

  /**
  * @name handleEdit
  * @desc Reveals save button and switches to edit mode
  * @param none
  * @returns {nothing}
  */
  handleEdit() {

    this.setState({
      textform: true
    });
    $('#savePrompt').toggleClass("hide");
    $('#editPrompt').toggleClass("hide");
  }

  /**
  * @name handlePaste
  * @desc when user pastes code, the textarea becomes a <code> box
  * @param none
  * @returns {nothing}
  */
  handlePaste(e) {
    // let code to be pasted
    setTimeout(function () {
      var code = this.refs.textarea.value;
      store.dispatch(challengePrompt(code));

      this.setState({
        textform: false,
      });
    }.bind(this), 100);
    $('#savePrompt').toggleClass("hide");
    $('#editPrompt').toggleClass("hide");
  }

  /**
  * @name handleChange
  * @desc Updates the state of the text in the textarea
  * @param none
  * @returns {nothing}
  */
  handleChange(e) {
    var text = e.target.value;
    store.dispatch(challengePrompt(text));
  }

  render() {
    let textbox = (this.state.textform ?
          <textarea placeholder="Paste Challenge Code Here"
            onPaste={this.handlePaste.bind(this)} onChange={this.handleChange.bind(this)} className="form-control form-control-log challenge-info" rows="14"
            id="comment" ref='textarea' value={this.props.challengePrompt}></textarea> :
          <pre id='pre' className='pre-scrollable'>{state().newChallenge.challengePrompt}</pre>)
    return (
      <form>
        <div className="form-group">

          {textbox}
          <button id='savePrompt' onClick={this.handleSave.bind(this)} className="btn btn-default" type="button">Save</button>
          <button id='editPrompt' onClick={this.handleEdit.bind(this)} className="btn btn-default hide" type="button">Edit</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        challengePrompt: state.newChallenge.challengePrompt
    }
}


//wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(ChallengePrompt)

// export default ChallengePrompt;
