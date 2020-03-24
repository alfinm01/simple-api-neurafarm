var express = require('express')
var router = express.Router()

/* Check if API is live. */
router.get('/', (req, res) => {
  res.send('You are connected')
})

/* Login endpoint. */
router.post('/login', (req, res) => {
  res.send('login')
})

/* Upload file endpoint. */
router.post('/upload-file', (req, res) => {
  res.send('upload-file')
})

/* Generate link for password recovery. */
router.post('/recover', (req, res) => {
  // Sending email to user containing link
  // Link is used to change password but with Postman
  // Link is in form of hashed email
  res.send('Use this link to change your password via Postman or similar application. [POST] /change-password/:id')
})

/* Change password endpoint. */
router.post('/change-password/:id', (req, res) => {
  res.send('Success')
})

module.exports = router
