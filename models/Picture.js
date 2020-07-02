const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pictureSchema = new Schema({
  isItFolder: {
    type: Boolean,
    require: true
  },
  many: {
    type: Boolean,
    require: true
  },
  file: [
    {
      boysGreyPicture: {
        type: String,
        default: ''
      },
      girlsGreyPicture: {
        type: String,
        default: ''
      },
      boysColorPicture: {
        type: String,
        default: ''
      },
      girlsColorPicture: {
        type: String,
        default: ''
      }
    }
  ],
  answers: {
    ref: 'pictures',
    type: [Schema.Types.ObjectId]
  },
  text: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: '/'
  }
})

module.exports = mongoose.model('pictures', pictureSchema)