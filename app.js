var createError = require('http-errors')
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

const uri = 'mongodb+srv://alfinm01:root@cluster0-y7sby.mongodb.net/test?retryWrites=true&w=majority'
// Later change to process.env.DATABASE_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// Get the default connection
var db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // send the error message
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
