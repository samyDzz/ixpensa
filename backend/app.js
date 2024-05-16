var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
require("dotenv").config();
var logger = require('morgan');

const cors = require('cors')

// mysql configuration
// var mysql = require("mysql"),
//   myConnection = require("express-myconnection"),
//   dbOptions = {
//     host: "localhost",
//     user: "beetendersnew_test",
//     password: "fM_%BRn~c0.X",
//     port: 3306,
//     database: "beetendersnew_test",
//     charset: "utf8mb4",
//     multipleStatements: true,
//     // waitForConnections: true,
//     // connectionLimit: 1000,
//     // queueLimit: 50,
//     // acquireTimeout: 20000,
//   };

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var settingsRouter = require('./routes/settings');

// var session = require("express-session");
// var MySQLStore = require("express-mysql-session")(session);

// var options = {
//   port: 3306,
//   host: "localhost",
//   user: "beetendersnew_test",
//   password: "fM_%BRn~c0.X",
//   database: "beetendersnew_test",
//   clearExpired: true,
//   checkExpirationInterval: 1800000, // 30 minutes
//   expiration: 86400000 * 30, // 24 heures.
// };

// var sessionStore = new MySQLStore(options);

var i18n = require("i18n");
i18n.configure({
  locales: ["en"],
  directory: __dirname + "/locales",
  queryParameter: "lang",
  defaultLocale: "en",
});

var app = express();
app.use(i18n.init);
app.use(cors());

// app.use(myConnection(mysql, dbOptions, "request"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(
//   session({
//     secret: "EXPENSASECRETKEY",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//     store: sessionStore,
//   })
// );

// handle react app.
app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/settings', settingsRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  res.json({
    success : false,
    msg : err.stack
  });
});

app.listen(process.env.NODE_ENV === "development" ? "8080" : "Passenger", (err) => {
  if(err) return console.log(err.stack);
  console.log(`Server Listen On ${process.env.NODE_ENV === "development" ? "8080" : "'Passenger'"}`)
});

module.exports = app;
