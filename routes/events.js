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

fields = [
  { name: 'image', maxCount: 1 },
  { name: 'photolikes', maxCount: 20 }
]

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:eventID', passport.authenticate('jwt', {session: false}), upload.fields(fields), controller.update)
router.patch('/dph', passport.authenticate('jwt', {session: false}), controller.deletePhoto)
router.patch('/users/:eventID', passport.authenticate('jwt', {session: false}), controller.changeUserStatus)
router.get('/one/:eventID', passport.authenticate('jwt', {session: false}), controller.getByID)
router.get('/moderators', passport.authenticate('jwt', {session: false}), stop, controller.getForModerators)
router.get('/bot', passport.authenticate('jwt', {session: false}), controller.getForBot)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getForEvents)
router.get('/photolikes', passport.authenticate('jwt', {session: false}), controller.getForPhotolikes)
router.get('/emo', passport.authenticate('jwt', {session: false}), controller.emoLetters)
router.get('/pl/:eventID', passport.authenticate('jwt', {session: false}), controller.pushLike)
router.get('/dl/:eventID', passport.authenticate('jwt', {session: false}), controller.deleteLike)

module.exports = router