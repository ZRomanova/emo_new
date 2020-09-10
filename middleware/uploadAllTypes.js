const multer = require('multer')
const moment = require('moment')
const os = require('os');
const hostname = os.hostname()
const folder = hostname == 'Mac-Book.local' ? 'uploads/' : 'uploads-repo/'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, folder)
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    const random = getRandomInt(1, 10000)
    cb(null, `${date}-${random}-${file.originalname}`)
  }
})

const limits = {
  fileSize: 1024 * 1024 * 50
}

module.exports = multer({storage, limits})