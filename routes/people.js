const express = require('express')
const passport = require('passport')
const controller = require('../controllers/people')
const router = express.Router()

router.get('/friends', passport.authenticate('jwt', {session: false}), controller.friends)
router.get('/search', passport.authenticate('jwt', {session: false}), controller.search)
router.delete('/', passport.authenticate('jwt', {session: false}), controller.exitDelete)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getUser)

module.exports = router