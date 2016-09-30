import React from 'react';
import Webcam from './webcam.jsx';
var Promise = require('bluebird');

class RTC extends React.Component {

  constructor(props) {
    super(props);
    // this.stream = null;
    this.state = {
      src: null,
      connections: [],
      peerConn: null,
    };
    this.socket = this.props.io;
    console.log('socket', this.socket);

    this.iceConfig = {
      'iceServers' : [{
        'url': 'stun:stun.1.google.com:19302'
      }]
    };

  }

  componentDidMount() {
    this.socket.on('msg', this.handleMessage);
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

  prepareCall() {
    this.setState({ peerConn : new RTCPeerConnection(this.iceConfig) });
    // sends ice candidate to other peer
    this.state.peerConn.onicecandidate = this.state.onIceCandidateHandler;
    // when remote stream arrives, show in the remote video element
    this.state.peerConn.onaddstream = this.onAddStreamHandler;
  }

  // getPeerConnection() {
  //   this.setState({ peerConn : new RTCPeerConnection() });
  //   this.state.peerConn.onaddstream = (evt) => {
  //     console.log('Received new stream!');
  //     var videoElem = document.createElement("video");
  //     $('#peerVideo').appendChild(videoElem);
  //     videoElem.src = evt.stream;
  //   };
  // }

  makeOffer() {

  }

  handleMessage(data) {
    var signal = null;
    if (!this.state.peerConn) {
      this.answerCall();
    }
    if (data.sdp) {
      this.state.peerConn.setRemoteDescription(new RTCSessionDescription(data.sdp));
    } else if (data.candidate) {
      this.state.peerConn.addIceCandidate(new RTCIceCandidate(data.candidate));
    } else if (data.closeConnection) {
      this.endCall();
    }
  }

  onIceCandidateHandler(evt) {
    if (!evt || !evt.candidate) return;
    // send ice candidate
    this.socket.emit('msg', {candidate: evt.candidate});
  }

  onAddStreamHandler(evt) {
    // this.connections.push(evt.stream);
    console.log('Received new stream!');
    var videoElem = document.createElement("video");
    document.getElementById('peerVideo').appendChild(videoElem);
    videoElem.src = evt.stream;
  }

  endCall() {
    console.log('Ending Call');
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
