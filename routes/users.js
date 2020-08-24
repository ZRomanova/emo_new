const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/users')
const router = express.Router()

const stop = (req, res, next) =>  {
    if(req.user && req.user.levelStatus !== 1 && req.user.levelStatus !== 2) {
      next(new Error('У вас нет прав доступа к данной странице.'));
    } else {
      next();
    }
  }

router.post('/', passport.authenticate('jwt', {session: false}), stop, upload.single('image'), controller.create)
router.patch('/:userID', passport.authenticate('jwt', {session: false}), stop, upload.single('image'), controller.update)
router.get('/', passport.authenticate('jwt', {session: false}), stop, controller.getAll)
//router.get('/:institutionID', passport.authenticate('jwt', {session: false}), controller.getByInstitution)
router.get('/:userID', passport.authenticate('jwt', {session: false}), stop, controller.getByUserID)
router.delete('/:userID', passport.authenticate('jwt', {session: false}), stop, controller.remove)

module.exports = router