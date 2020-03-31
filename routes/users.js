var express = require('express')
var router = express.Router()
var User = require('../db/User')

/* GET all users. */
router.get('/', async (req, res) => {
  const user = await User.find()
  res.send(user)
})

/* GET user by id. */
router.get('/:id', async (req, res) => {
  const result = await User.create({ username: 'alfin', password: 'oi' })
  res.send(result)
})

/* POST new user. */
router.post('/', (req, res) => {
  res.send('post something')
})

/* UPDATE user info. */
router.put('/:id', (req, res) => {
  res.send('respond with a resource')
})

/* DELETE user. */
router.delete('/:id', (req, res) => {
  res.send('Deleted')
})

module.exports = router
