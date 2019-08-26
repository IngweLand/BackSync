var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// The Upload API
var fileUpload = multer().single('file')
app.post('/upload', function (req, res) {
  
  fileUpload(req, res, function (err) {
    
    if (err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ message: "Upload Failed" }, null, 3));
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: "Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded Upload Succeeded " }, null, 3));
  })
})

// The Download API
app.get('/download', function(req, res, next){
  var path = __dirname + '/sampledownload.pdf';
  res.download(path);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
