const express = require('express')
const controller = require('../controllers/users')
const router = express.Router()

router.post('/', controller.create)
router.patch('/:userID', controller.update)
router.get('/:institutionID', controller.getByInstitution)
router.get('/:userID', controller.getByUserID)
router.delete('/:userID', controller.remove)

module.exports = router