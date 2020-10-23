const express = require('express')
const passport = require('passport')
const controller = require('../controllers/people')
const router = express.Router()

router.get('/friends', passport.authenticate('jwt', {session: false}), controller.friends)
router.get('/search/:instID', passport.authenticate('jwt', {session: false}), controller.search)
router.get('/toPictures/:instID', passport.authenticate('jwt', {session: false}), controller.toPictures)
router.patch('/', passport.authenticate('jwt', {session: false}), controller.update)
router.delete('/', passport.authenticate('jwt', {session: false}), controller.exitDelete)
router.get('/logout', passport.authenticate('jwt', {session: false}), controller.exitLogout)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getUser)

module.exports = router