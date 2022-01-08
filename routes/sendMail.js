const express = require('express')
const router = express.Router();

// routes
const route = require('../controller/mailController')

router.post('/', route.index)
router.post('/send-mail', route.sendMail)

module.exports = router