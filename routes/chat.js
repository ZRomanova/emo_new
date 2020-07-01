const express = require('express')
const controller = require('../controllers/chat')
const router = express.Router()

router.get('/:senderID/:recipientID', controller.getAll)
router.post('/', controller.send)
router.delete('/:messageID', controller.remove)
router.delete('/:senderID/:recipientID', controller.removeAll)

module.exports = router