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
            <ModalTitle>{this.props.title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            {this.props.body}
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
