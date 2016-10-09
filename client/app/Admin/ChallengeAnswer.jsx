import React from 'react';

/*
  User inputs the source code when creating new challenge
*/
export default class ChallengeAnswer extends React.Component{
  constructor(props) {
    super(props);

    /*
     * @textform: State of text of edit mode or <code> mode
     * @code: User input source code
    */
    this.state = {
      textform: true,
      code: ''
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
    this.setState({
      code: text
    });
    this.props.handleSourceCode(text);
    this.setState({
      textform: false
    });
    $('#saveAnswer').toggleClass("hide");
    $('#editAnswer').toggleClass("hide");

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
      this.setState({
        code:text
      });
      this.props.handleSourceCode(text);
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
    this.setState({
      code: e.target.value
    });
  }

  render() {
    var textbox = (this.state.textform ?
          <textarea placeholder="Paste Challenge Answer Here"
            onPaste={this.handlePaste.bind(this)} onChange={this.handleChange.bind(this)} className="form-control" rows="14"
            id="comment" ref='textarea'>{this.state.code}</textarea> :
          <pre id='pre' className='pre-scrollable'>{this.state.code}</pre>);

    return (
      <form>
        <div className="form-group">
          <label htmlFor="comment">Challenge Answer:</label>
          {textbox}
          <button id='saveAnswer' onClick={this.handleSave.bind(this)} className="btn btn-default" type="button">Save</button>
          <button id='editAnswer' onClick={this.handleEdit.bind(this)} className="btn btn-default hide" type="button">Edit</button>
        </div>
      </form>
    )
  }
}
