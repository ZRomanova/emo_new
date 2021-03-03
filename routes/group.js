const express = require('express')
const passport = require('passport')
const upload = require('../middleware/uploadAllTypes.js')
const controller = require('../controllers/group')
const router = express.Router()

router.post('/:groupID', passport.authenticate('jwt', {session: false}), controller.send)
router.delete('/:messageID', passport.authenticate('jwt', {session: false}), controller.remove)
router.get('/:groupID', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/one/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.post('/picture/new', passport.authenticate('jwt', {session: false}), upload.array('files'), controller.create)
router.post('/vote/new', passport.authenticate('jwt', {session: false}), upload.single('file'), controller.vote)

module.exports = router