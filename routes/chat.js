const express = require('express')
const passport = require('passport')
const controller = require('../controllers/chat')
const upload = require('../middleware/uploadAllTypes.js')
const router = express.Router()

router.get('/message/:userID', passport.authenticate('jwt', {session: false}), controller.getAllMessage)
router.get('/:parentID', passport.authenticate('jwt', {session: false}), controller.getAllPictures)
router.post('/', passport.authenticate('jwt', {session: false}), controller.send)
router.delete('/:messageID', passport.authenticate('jwt', {session: false}), controller.remove)
router.delete('/', passport.authenticate('jwt', {session: false}), controller.removeAll)
router.post('/new', passport.authenticate('jwt', {session: false}), upload.array('files'), controller.create)
router.get('/interlocutor/:id', passport.authenticate('jwt', {session: false}), controller.getFriend)


module.exports = router