//This sets up the web server
const express = require('express');
const app = express();

//use middleware
require('./config/middleware.js')(app, express);

// routes
require('./config/routes.js')(app);

// set port up
var port = process.argv[2] || 3000;
app.listen(port, function () {
  console.log('Web Server listening on port ' + port +' !');
});
