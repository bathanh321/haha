var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//1. Declare library mongoose to connect database
var mongoose = require('mongoose');
//2. Declare URI linked to database
var uri_local = "mongodb://127.0.0.1:27017/";
var uri_atlas = "mongodb+srv://thanhnbgch211319:JTtrB4Wo5URmF89a@cluster0.aivbiho.mongodb.net/";
//3. Check connection
mongoose.connect(uri_atlas)
.then(()=> console.log("connect to mongoose success!"))
.catch((err) => console.log(err))
//.catch((err) => console.log("connect to mongoose failed!"))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
