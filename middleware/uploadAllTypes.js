const multer = require('multer')
const moment = require('moment')
const host = process.env.HOST || '0.0.0.0'
const folder = host == '0.0.0.0' ? 'uploads/' : 'uploads-repo/'

console.log('HOST', process.env.HOST)
console.log('host', host)

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