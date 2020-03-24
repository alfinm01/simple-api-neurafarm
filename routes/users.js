var express = require('express');
var router = express.Router();

/* GET all users. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

/* GET user by id. */
router.get('/:id', (req, res) => {
  res.send('respond with a resource');
});

/* POST new user. */
router.post('/', (req, res) => {
  res.send('respond with a resource');
});

/* UPDATE user info. */
router.put('/:id', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
