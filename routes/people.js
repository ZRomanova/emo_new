const express = require('express')
const controller = require('../controllers/people')
const router = express.Router()

router.get('/friends/:userID', controller.friends)
router.get('/search/:institutionID', controller.search)

module.exports = router