// Routes received by the server
var fs = require('fs');
var path = require('path');
var express = require('express');
var Chance = require('chance'),
    chance = new Chance();

var cached = {}, ukey = '';

module.exports = {
  routes: (app, io) => {
    var create_namespace = require('./services.js').create_namespace;
    app.route('/pad/create')
      .get((req, res) => {
        ukey = '/' + chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
        create_namespace(ukey, io);
        cached[ukey] = ukey;
        res.send(ukey);
      });

    var passport = require('passport');
    var isAuth = require('./isAuthenticated');

    app.get('/auth/github',
      passport.authenticate('github', {scope: ['user', 'public_repo']}),
      (req, res) => {
        console.log('success');
      }
    );

    app.get('/auth/github/callback',
      passport.authenticate('github', {failureRedirect: '/'}),
      (req, res) => {
        console.log('entered into the auth/github/callback');
        res.redirect('/');
      });

    app.get('/logout',
      (req, res) => {
        req.logout();
        res.redirect('/');
      });

    app.route('/editor/*')
      .get((req, res) => {
        var urlPath = req.path.slice(7, req.path.length);
        console.log(urlPath);
        if (cached[urlPath])
          res.render('index.html');
        else
          res.sendStatus(404);
      });

    app.route('/*')
      .get((req, res) => {
        res.status(404).render('index.html');
      });
      /*function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.redirect('/login')
      }*/

      // commenting out for now, but this pretty much checks for existing auth.
      // app.route('/[^\/]', isAuth(req, res, next));
    // ** below code block is used for the server setup
    // for socket.io
    // link: http://stackoverflow.com/questions/27393705/socketio-get-http-localhost3000-socket-io-eio-3transport-pollingt-1418187

    // end for socket
  },

  addToCached: (urlPath) => {
    cached[urlPath] = urlPath;
  }
}
