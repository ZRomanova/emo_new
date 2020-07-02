const express = require('express')
const passport = require('passport')
const controller = require('../controllers/chat')
const router = express.Router()

router.get('/:senderID/:recipientID', passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/', passport.authenticate('jwt', {session: false}), controller.send)
router.delete('/:messageID', passport.authenticate('jwt', {session: false}), controller.remove)
router.delete('/:senderID/:recipientID', passport.authenticate('jwt', {session: false}), controller.removeAll)

module.exports = router