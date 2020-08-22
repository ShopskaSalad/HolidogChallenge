var express       = require('express');
var createError   = require('http-errors');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
const helmet      = require('helmet')


//routers
var indexRouter   = require('./routes/index');
var booksRouter   = require('./routes/book');
var authorsRouter = require('./routes/author');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//some bug fix
app.use(helmet.contentSecurityPolicy({  directives:{    defaultSrc: ["'self'"],    scriptSrc: ["'self'", 'maxcdn.bootstrapcdn.com', 'ajax.googleapis.com'],    styleSrc:["'self'", 'maxcdn.bootstrapcdn.com'],    imgSrc: ["'self'", 'image.tmdb.org']  }}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/book', booksRouter);
app.use('/author', authorsRouter);

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
