const express = require('express')
const passport = require('passport')
const controller = require('../controllers/institutions')
const router = express.Router()

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:institutionID', passport.authenticate('jwt', {session: false}), controller.update)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:institutionID', passport.authenticate('jwt', {session: false}), controller.getByInstitutionID)
router.delete('/:institutionID/:newID', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router