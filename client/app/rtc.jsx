import React from 'react';
import Webcam from './webcam.jsx';
var Promise = require('bluebird');

class RTC extends React.Component {

  constructor(props) {
    super(props);
    // this.stream = null;
    this.state = {
      connections: [],
      peerConn: null,
      localstream: {
        stream: null,
        src: null
      }
    };
    this.socket = this.props.io;
    console.log('socket', this.socket);

    this.iceConfig = {'iceServers':
      [{'url': 'stun:stun.services.mozilla.com'}, {'url': 'stun:stun.l.google.com:19302'}]
    };

  }

  componentDidMount() {
    this.socket.on('msg', this.handleMessage.bind(this));
  }
  startChat() {
    this.getVideoStream().then((stream) => {
      this.setState({ localstream: {
        src: window.URL.createObjectURL(stream)
      }});
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
    var peerConn = new webkitRTCPeerConnection(this.iceConfig);
    this.setState({ peerConn : peerConn});
    // sends ice candidate to other peer
    console.log(peerConn, 'peerConn');
    peerConn.onicecandidate = this.state.onIceCandidateHandler;
    // when remote stream arrives, show in the remote video element
    peerConn.onaddstream = this.onAddStreamHandler;
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
  initiateCall() {
    this.prepareCall();
    navigator.getUserMedia({audio: true, video: true}, (stream) => {
    // this.getVideoStream().then((stream) => {
      this.setState({ localstream: {
        stream: stream,
        src: window.URL.createObjectURL(stream)
      }});
      this.state.peerConn.addStream(this.state.localstream.stream);
      this.makeOffer();
    }, this.errorHandler);

  }
  answerCall(data) {
    this.prepareCall();
    console.log('answering call');

    //get local stream and send
    // this.getVideoStream().then((stream) => {
      navigator.getUserMedia({audio: true, video: true}, (stream) => {
      this.setState({ localstream: {
        stream: stream,
        src: window.URL.createObjectURL(stream)
      }});
      this.state.peerConn.addStream(stream);
      console.log('about to send answer');
      this.sendAnswer(data);
    }, this.errorHandler);
  }

  makeOffer() {
    var options = {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
    };

    this.state.peerConn.createOffer((offer) => {
      var off = new RTCSessionDescription(offer);
      this.state.peerConn.setLocalDescription(offer, () => {
        console.log('Emitting and Making Offer');
        console.log(this.socket);
        this.socket.emit('msg', {sdp: off});
      }, this.errorHandler, offer);
    }, this.errorHandler);
  }

  sendAnswer(data) {
    console.log('sending answer', this, this.state.peerConn);

    this.state.peerConn.setRemoteDescription(new RTCSessionDescription(data.sdp), () => {
      console.log('Setting remote answer');
    }, (e) => {console.error(e);});

    this.state.peerConn.createAnswer((answer) => {
      var ans = new RTCSessionDescription(answer);
      this.state.peerConn.setLocalDescription(ans, () => {
        console.log('Emitting and Sending Answer');
        this.socket.emit('msg', {sdp:ans});
      }, this.errorHandler);
    }, this.errorHandler);
  }

  handleMessage(data) {
    // var pc = getPeerConnection();
    var signal = null;
    console.log('handling message');
    console.log(typeof data, data);
    if (!this.state.peerConn) {
      this.answerCall(data);
    }
    // if (data.sdp.type === 'offer') {
    //   this.state.peerConn.setRemoteDescription(new RTCSessionDescription(data.sdp), () => {
    //     this.state.peerConn.createAnswer((ans) => {
    //       this.state.peerConn.setLocalDescription(ans, () => {
    //         this.socket.emit('msg', {sdp: ans});
    //       }, error => console.error(error));
    //     }, error => console.error(error));
    //   }, error => console.error(error));
    // } else
     if (data.sdp) {
      console.log('setting answer');
      this.state.peerConn.setRemoteDescription(new RTCSessionDescription(data.sdp), () => {
        console.log('Setting remote answer');
      }, (e) => {console.error(e);});
    } else if (data.candidate) {
        console.log('New candidate');
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

  errorHandler(error) {
    console.error(error);
  }
  render() {
    return (
      <div>
        <div id='RTC'></div>
        <div>
          <button onClick={this.initiateCall.bind(this)}>Join WebChat!</button>
          <Webcam src={this.state.localstream.src}/>
        </div>
        <div id='peerVideo'>
          <h3>Peer Videos:</h3>
        </div>
      </div>
    )
  }

}

export default RTC;
