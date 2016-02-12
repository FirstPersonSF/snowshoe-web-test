// LIBS
// ======================================

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

// DB CONNECTION
// ======================================

var mongooseOptions = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS : 30000
    }
  }
};
var mongodbUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI;
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, mongooseOptions);

// import all models
require('./app/models/index');

// INIT
// ======================================

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTING
// ======================================

// base route
// needs to be registered AFTER the API routes
var defaultRoute = require('./app/routes/default');
app.use('/', defaultRoute);

// ERROR HANDLERS
// ======================================

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;
