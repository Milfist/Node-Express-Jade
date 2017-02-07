var express      = require('express'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    mongoose     = require('mongoose'),
    flash        = require('express-flash'),
    session      = require('express-session'),
    routes       = require('./routes/index'),
    users        = require('./routes/users'),
    getpost      = require('./routes/getpost'),
    filesystem   = require('./routes/filesystem'),
    mongo        = require('./routes/mongo/taskListView'),
    mongoS       = require('./routes/mongo/saveTaskView'),
    mongoU       = require('./routes/mongo/updateTaskView'),
    mongoR       = require('./routes/mongo/removeTaskView'),

    app          = express();

app.use(cookieParser());
app.use(session({ secret: "password" }));

// Flash
app.use(flash());

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

app.use('/', routes);
app.use('/users', users);
app.use('/getpost', getpost);
app.use('/filesystem', filesystem);
app.use('/mongoList', mongo);
app.use('/mongoSave', mongoS);
app.use('/mongoUpdate', mongoU);
app.use('/mongoRemove', mongoR);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

mongoose.connect('mongodb://localhost/local', function(err){
  if(!err){
    console.log('connected to Mongo');
  }else{
    throw err;
  }
});

//require('./routes/mongo/model/model').initialize();


