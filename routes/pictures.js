const express = require('express')
const controller = require('../controllers/pictures')
const router = express.Router()

router.post('/', controller.create)
router.patch('/:pictureID', controller.update)
router.get('/:path', controller.getByPath)
router.get('/:pictureID', controller.getByPictureID)
router.delete('/:pictureID', controller.remove)

module.exports = router