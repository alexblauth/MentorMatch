var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    router = require('../routes/server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {useMongoClient: true});

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());


  /*Serve static files */
  app.use('/', express.static(__dirname + '/../../client'));

  /* Use the profiles router for requests to the api */
  app.use('/api/profiles', router);


  /* Go to dev page */
  app.all('/dev', function(req, res) {
    res.sendFile(path.resolve('client/testing.html'));
  });

  /* Go to homepage for all routes not specified */
  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};
