const express = require('express')
const passport = require('passport')
const controller = require('../controllers/users')
const router = express.Router()

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:userID', passport.authenticate('jwt', {session: false}), controller.update)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:institutionID', passport.authenticate('jwt', {session: false}), controller.getByInstitution)
router.get('/:userID', passport.authenticate('jwt', {session: false}), controller.getByUserID)
router.delete('/:userID', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router