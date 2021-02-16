const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/bot')
const router = express.Router()

const stop = (req, res, next) =>  {
    if(req.user && req.user.levelStatus !== 1 && req.user.levelStatus !== 2) {
      next(new Error('У вас нет прав доступа к данной странице.'));
    } else {
      next();
    }
  }

const admin = (req, res, next) =>  {
  if(req.user && req.user.levelStatus !== 1) {
    next(new Error('У вас нет прав доступа к данной странице.'));
  } else {
    next();
  }
}

router.post('/', passport.authenticate('jwt', {session: false}), admin, upload.single('image'), controller.create)
router.patch('/:buttonID', passport.authenticate('jwt', {session: false}), admin, upload.single('image'), controller.update)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:buttonID', passport.authenticate('jwt', {session: false}), stop, controller.getByButtonID)

module.exports = router