const express = require('express')
const passport = require('passport')
const controller = require('../controllers/institutions')
const router = express.Router()

const stop = (req, res, next) =>  {
    if(req.user && req.user.levelStatus !== 1 && req.user.levelStatus !== 2) {
      next(new Error('У вас нет прав доступа к данной странице.'));
    } else {
      next();
    }
  }

router.post('/', passport.authenticate('jwt', {session: false}), stop, controller.create)
router.patch('/:institutionID', passport.authenticate('jwt', {session: false}),  stop, controller.update)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllAdmin)
router.get('/search', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:institutionID', passport.authenticate('jwt', {session: false}), stop, controller.getByInstitutionID)
router.delete('/:institutionID/:newID', passport.authenticate('jwt', {session: false}), stop, controller.remove)

module.exports = router