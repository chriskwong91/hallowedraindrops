const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const auth = require('./isAuthenticated.js');

module.exports = (app, express) => {
  //Print all of the requests to the server
  app.use(morgan('dev'));
  app.use(cookieParser());

  //Reads information from forms ands puts it in a body object
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // you should have your secret before your passport initialize
  app.use(methodOverride());
  app.use(session({secret: 'pizza kitty', resave: false, saveUninitialized: false}));
  app.use(passport.initialize());
  // app.use(passport.session()); // why are there two of these (?)

  require('./auth.js')(passport);

  // serves static files
  var public_dirs = [
  	'/../../client',
  	'/../../client/styling/index/'
	];
  public_dirs.forEach((path) => app.use(express.static(__dirname + path)));

  //Check credentials
  app.use(auth.user);
  app.use('/mod', auth.moderator);
  app.use('/admin', auth.admin);

  // Add headers
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
};

