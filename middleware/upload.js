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

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const limits = {
  fileSize: 1024 * 1024 * 5
}


module.exports = multer({storage, fileFilter, limits})