//This sets up the web server
const express = require('express');
const app = express();
const services = require('./config/services.js');
const replRouter = require('./resources/repl/replRoutes.js');
const adminRouter = require('./resources/admin/adminRoutes.js');
const blogRouter = require('./resources/blog/blogRoutes.js');

// var router = require('./config/routes.js');

//use middleware
require('./config/middleware.js')(app, express);

// serve static files
app.set('views', __dirname + '/../client/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// use services
app.use(express.static(__dirname + '../client'));
app.use('/api/replservice', replRouter);
app.use('/admin', adminRouter);
app.use('/api/blog', blogRouter);

const port = process.argv[2] || 8080;
const server = require('http').Server(app);
if(!module.parent) {
  server.listen(port, () => {
    console.log('socket on 8080');
  });
}
var io = require('socket.io')(server);
require('./config/routes.js').routes(app, io);
services.setPairingListeners(io);

module.exports = {
  app: app
};
