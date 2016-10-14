const User = require('../database/models/Users.js');
const Chance = require('chance');
const chance = new Chance();
const waiting_queue = [];
const active_cache = {};
const addToCached = require('./routes.js').addToCached;

module.exports = {

  run: 'https://floating-sierra-53807.herokuapp.com/api/repl',
  suite: 'http://localhost:1337/api/test',
  // suite: 'https://warm-temple-20798.herokuapp.com/api/test',
  // testing: 'https://warm-temple-20798.herokuapp.com/db/test',
  testing: 'http://localhost:1337/db/test',
  REPL: 'https://floating-sierra-53807.herokuapp.com/api/repl',
  Analytics: 'http://localhost:1337/api/analytics',

  create_namespace: (path, io) => {
    console.log('created namespace');
  	var nsp = io.of(path);
  	nsp.on('connection', (socket) => {
  	  console.log('a user has connected', path);

  	  socket.on('text change', (msg) => {
        console.log('msg', msg);
  	    nsp.emit('alter text', msg);
  	  });

  	  socket.on('append result', (msg, test) => {
  	    nsp.emit('alter result', msg, test);
  	  });

  	  socket.on('disconnect', () => {
  	    console.log('a user has disconnected');
  	  });
  	});
  },

  setPairingListeners: function(io) {
    var context = this;
    io.on('connection', function(socket){
      socket.on('message', function(obj){
        if (!active_cache[obj.client_id]){
          waiting_queue.push(obj.client_id);
          active_cache[obj.client_id] = true;
          console.log(waiting_queue.length);
        }
        if (waiting_queue.length > 1){
          var ukey = '/' + chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
          addToCached(ukey);
          context.create_namespace(ukey, io, 'pair');
          io.emit(waiting_queue.shift(), {namespace:ukey});
          io.emit(waiting_queue.shift(), {namespace:ukey});
        }
      });
    });

    //   Server Side:
    //     add to queue
    //     if its < 2 == 0
    //       shift off two clients
    //       create namespace
    //       emit client id with same namespace as second param

    //   Client Side:
    //     on button press emit
    //       make client id
    //       set listener with client id
    //         assign namespace with namespace that is passed in
    //       emit challenge
    //         pass in client id
    //         will trigger listener server side
  },


  addUser: (profile, User, callback)  => {
    User.sync().then(() => {
      console.log('adding user');
      return User.find({where: {github_id: profile.id}}).then((user) => {
        console.log('finding if user exist in add user');
        if (!user) {
          console.log('user does not exist');
          User.create({
            login: profile.username,
            github_id: profile.id,
            name: profile.displayName,
            avatar_url: profile._json.avatar_url,
            github_url: profile.profileUrl,
            email: profile.emails[0].value,
            company: profile._json.company,
            admin: null,
            moderator: null,
            reputation: 0
          }).then((user) => {
            callback(user);
          });
        }
        // callback(createToken(user, secret));
        callback(user);
      });
    });
  },

  findUser: (id, callback) => {
    console.log('finding user');
    User.sync().then(() => {
      return User.find({where:{github_id: id}}).then((user) => {
        callback(user);
      });
    });
  }
};
