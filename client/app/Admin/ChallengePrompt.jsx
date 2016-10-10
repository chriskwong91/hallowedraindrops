import React from 'react';

class ChallengePrompt extends React.Component{
  constructor(props) {
    super(props);

    /*
     * @textform: State of text of edit mode or <code> mode
     * @code: User input challenge
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
    this.props.handlePrompt(text);
    this.setState({
      textform: false
    });
    $('#savePrompt').toggleClass("hide");
    $('#editPrompt').toggleClass("hide");
  }

  handleEdit() {
    $('#savePrompt').toggleClass("hide");
    $('#editPrompt').toggleClass("hide");

    this.setState({
      textform: true
    });
  }

  handlePaste(e) {
    // let code to be pasted
    setTimeout(function () {
      var code = this.refs.textarea.value;
      this.setState({
        code: code
      });
      this.props.handlePrompt(code);
      this.setState({
        textform: false,
      });
    }.bind(this), 100);
    $('#savePrompt').toggleClass("hide");
    $('#editPrompt').toggleClass("hide");

  }

  handleChange(e) {
    this.setState({
      code: e.target.value
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comment">Challenge Prompt:</label>
          {this.state.textform ?
          <textarea placeholder="Paste Challenge Code Here"
            onPaste={this.handlePaste.bind(this)} onChange={this.handleChange.bind(this)} className="form-control" rows="14"
            id="comment" ref='textarea'>{this.state.code}</textarea> :
          <pre id='pre' className='pre-scrollable'>{this.state.code}</pre>}
          <button id='savePrompt' onClick={this.handleSave.bind(this)} className="btn btn-default" type="button">Save</button>
          <button id='editPrompt' onClick={this.handleEdit.bind(this)} className="btn btn-default hide" type="button">Edit</button>
        </div>
      </form>
    )
  }
}

export default ChallengePrompt;
