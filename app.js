var express = require('express');

var app = express();
app.use('/', require('./routes/index'));


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;