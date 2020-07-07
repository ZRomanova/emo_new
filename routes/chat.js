const express = require('express')
const passport = require('passport')
const controller = require('../controllers/chat')
const router = express.Router()

router.get('/:recipientID', passport.authenticate('jwt', {session: false}), controller.getAllMessage)
router.get('/:path', passport.authenticate('jwt', {session: false}), controller.getAllPictures)
router.post('/', passport.authenticate('jwt', {session: false}), controller.send)
router.delete('/:messageID', passport.authenticate('jwt', {session: false}), controller.remove)
router.delete('/:recipientID', passport.authenticate('jwt', {session: false}), controller.removeAll)

module.exports = router