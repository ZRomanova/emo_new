const express = require('express')
const passport = require('passport')
const controller = require('../controllers/people')
const router = express.Router()

router.get('/friends/:userID', passport.authenticate('jwt', {session: false}), controller.friends)
router.get('/search/:institutionID', passport.authenticate('jwt', {session: false}), controller.search)

module.exports = router