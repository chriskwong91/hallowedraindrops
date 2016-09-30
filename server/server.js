//This sets up the web server
const express = require('express');
const app = express();
const services = require('./config/services.js');
var replRouter = require('./resources/repl/replRoutes.js');

//use middleware
require('./config/middleware.js')(app, express);

// serve static files
app.use(express.static(__dirname + '../client'));

// use services
app.use('/api/replservice', replRouter);
// require('./config/routes.js')(app);

// set port up
var port = process.argv[2] || 8080;

// *** below code block was used for express server
// app.listen(port, function () {
//   console.log('Web Server listening on port ' + port +' !');
// });



// ** below code block is used for the server setup
// for socket.io
// link: http://stackoverflow.com/questions/27393705/socketio-get-http-localhost3000-socket-io-eio-3transport-pollingt-1418187
var server = require('http').Server(app);
var io = require('socket.io')(server);
if(!module.parent) {
  server.listen(port, () => {
  	console.log('socket on 8080');
  });
}

io.on('connection', (socket) => {
  console.log('a user has connected');

  socket.on('text change', (msg) => {
  	console.log('msg value is: ', msg);
  	io.emit('alter text', msg);
  });

  socket.on('append result', (msg) => {
  	console.log('append result is: ', msg);
  	io.emit('alter result', msg);
  });

  socket.on('disconnect', () => {
  	console.log('a user has disconnected');
  });

  socket.on('msg', (msg) => {
    console.log('emitting message in server');
    io.emit('msg', msg);
  });
});
// end for socket

module.exports = {
  app: app
};
