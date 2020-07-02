const express = require('express')
const controller = require('../controllers/institutions')
const router = express.Router()

router.post('/', controller.create)
router.patch('/:userID', controller.update)
router.get('/', controller.getAll)
router.get('/:institutionID', controller.getByInstitutionID)
router.delete('/:institutionID', controller.remove)

module.exports = router