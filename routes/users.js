var express = require('express')
const bcrypt = require('bcrypt')
var router = express.Router()
var User = require('../models/User')

/* GET all users. */
router.get('/', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

/* GET user by id. */
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.send(user)
})

/* POST new user. */
router.post('/', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const result = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    birthdate: req.body.birthdate,
    profile_picture: req.body.profile_picture,
    occupation: req.body.occupation,
    phone_number: req.body.phone_number
  })
  res.send(result)
})

/* UPDATE user info. */
router.put('/:id', async (req, res) => {
  const result = await User.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    birthdate: req.body.birthdate,
    profile_picture: req.body.profile_picture,
    occupation: req.body.occupation,
    phone_number: req.body.phone_number
  })
  res.send(result)
})

/* DELETE user. */
router.delete('/:id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id)
  res.send(result)
})

module.exports = router
