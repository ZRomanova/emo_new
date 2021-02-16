const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/events')
const router = express.Router()

const stop = (req, res, next) =>  {
    if(req.user && req.user.levelStatus !== 1 && req.user.levelStatus !== 2) {
      next(new Error('У вас нет прав доступа к данной странице.'));
    } else {
      next();
    }
  }

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:eventID', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)
router.get('/one/:eventID', passport.authenticate('jwt', {session: false}), controller.getByID)
router.get('/moderators', passport.authenticate('jwt', {session: false}), stop, controller.getForModerators)

module.exports = router