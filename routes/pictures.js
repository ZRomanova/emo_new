const express = require('express')
const passport = require('passport')
const controller = require('../controllers/pictures')
const upload = require('../middleware/upload')
const router = express.Router()

fields = [
  { name: 'boysGreyPicture', maxCount: 1 },
  { name: 'girlsGreyPicture', maxCount: 1 },
  { name: 'boysColorPicture', maxCount: 1 },
  { name: 'girlsColorPicture', maxCount: 1 }
]

const stop = (req, res, next) =>  {
  if(req.user && !req.user.levelStatus == 1) {
    next(new Error('У вас нет прав доступа к данной странице.'));
  } else {
    next();
  }
}

router.post('/:parentID', passport.authenticate('jwt', {session: false}), stop, upload.fields(fields), controller.create)
router.patch('/:pictureID', passport.authenticate('jwt', {session: false}), stop, upload.fields(fields), controller.update)
router.get('/:folderID', passport.authenticate('jwt', {session: false}), stop, controller.getAll)
router.get('/', passport.authenticate('jwt', {session: false}), stop, controller.getByPictureID)
router.delete('/:pictureID', passport.authenticate('jwt', {session: false}), stop, controller.remove)

module.exports = router