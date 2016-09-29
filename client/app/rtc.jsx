import React from 'react';
import Webcam from './webcam.jsx';
var Promise = require('bluebird');

class RTC extends React.Component {

  constructor(props) {
    super(props);
    // this.stream = null;
    this.state = {
      src: null,
      connections: {},
    };
    this.socket = this.props.io;
    console.log('socket', this.socket);
  }

  startChat() {
    this.getVideoStream().then((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream)});
    });
  }

  getVideoStream() {
    // if (this.stream) {
    //   return Promise.promisfy(this.stream);
    // } else {
      return new Promise((resolve, reject) =>{
        navigator.getUserMedia({
          video: true,
          audio: true
        }, (s) => {
          // this.stream = s;
          resolve(s);
        }, (e) => {
          reject(e);
        });
      });
    // }
  }

  getPeerConnection() {
    var peerConn = new RTCPeerConnection();
    peerConn.onaddstream = (evt) => {
      console.log('Received new stream!');
      var videoElem = document.createElement("video");
      $('#peerVideo').appendChild(videoElem);
      videoElem.src = evt.stream;
    };
  }

  makeOffer() {

  }

  render() {
    return (
      <div>
        <div id='RTC'></div>
        <div>
          <button onClick={this.startChat.bind(this)}>Join WebChat!</button>
          <Webcam src={this.state.src}/>
        </div>
        <div id='peerVideo'>
          <h3>Peer Videos:</h3>
        </div>
      </div>
    )
  }

}

export default RTC;
