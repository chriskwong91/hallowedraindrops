import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  hideModal() {
    this.setState({
      isOpen: false
    });
  }

  render(){


    return (
      <div>
        <button type="button" onClick={this.openModal} className="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">
          <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
        </button>

        <Modal size='modal-lg' isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Challenge Prompt Example</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <pre id='pre' rows='20' className='pre-scrollable'>{"/**\n * Write a function that, given a string, Finds the longest run of identical\n * characters and returns an array containing the start and end indices of\n * that run. If there are two runs of equal length, return the first one.\n * For example:\n *\n *   longestRun(\"abbbcc\") // [1, 3]\n *   longestRun(\"aabbc\")  // [0, 1]\n *   longestRun(\"abcd\")   // [0, 0]\n *   longestRun(\"\")       // [0, 0]\n *\n * Try your function with long, random strings to make sure it handles large\n * inputs well.\n */\n\nvar longestRun = function (string) {\n  // TODO: Your code here!\n };"}</pre>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalExample;
