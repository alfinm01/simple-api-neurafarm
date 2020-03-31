// Require Mongoose
var mongoose = require('mongoose')

// Define a schema
var Schema = mongoose.Schema

var userSchema = new Schema({
  username: String,
  password: String
})

// Compile model from schema
var User = mongoose.model('User', userSchema)

module.exports = User
