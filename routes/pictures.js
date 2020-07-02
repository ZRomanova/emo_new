const express = require('express')
const passport = require('passport')
const controller = require('../controllers/pictures')
const router = express.Router()

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:pictureID', passport.authenticate('jwt', {session: false}), controller.update)
router.get('/:path', passport.authenticate('jwt', {session: false}), controller.getByPath)
router.get('/:pictureID', passport.authenticate('jwt', {session: false}), controller.getByPictureID)
router.delete('/:pictureID', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router