const multer = require('multer')
const moment = require('moment')
const keys = require('./../config/keys')
let folder

if (keys.production) {
  folder = 'uploads-repo/'
}
else {
  folder = 'uploads/'
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '')
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    const random = getRandomInt(1, 10000)
    cb(null, `${folder}/${date}-${random}-${file.originalname}`)
  }
})

const limits = {
  fileSize: 1024 * 1024 * 50
}

module.exports = multer({storage, limits})