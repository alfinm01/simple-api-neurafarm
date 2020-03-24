var express = require('express')
var router = express.Router()
var db = require('../db/functions')

/* GET all users. */
router.get('/', (req, res) => {
  console.log(db)
  const user = db.function1
  console.log(user)
  res.send(user)
})

/* GET user by id. */
router.get('/:id', (req, res) => {
  const result = db.function2
  console.log(result)
  res.send(result)
})

/* POST new user. */
router.post('/', (req, res) => {
  res.send('respond with a resource')
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
