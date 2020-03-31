// Require Mongoose
var mongoose = require('mongoose')

// Define a schema
var Schema = mongoose.Schema

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  birthdate: Date,
  profile_picture: String,
  occupation: String,
  phone_number: Number
})

// Compile model from schema
var User = mongoose.model('User', userSchema)

module.exports = User
