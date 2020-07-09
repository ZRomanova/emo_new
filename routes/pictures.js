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

router.post('/:parentID', passport.authenticate('jwt', {session: false}), upload.fields(fields), controller.create)
router.patch('/:pictureID', passport.authenticate('jwt', {session: false}), upload.fields(fields), controller.update)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:pictureID', passport.authenticate('jwt', {session: false}), controller.getByPictureID)
router.delete('/:pictureID', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router