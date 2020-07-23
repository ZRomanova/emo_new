const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pictureSchema = new Schema({  
  folder: {             //true - folder, false - picture
    type: Boolean,
    default: false,
    required: true
  },
    
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
  },
    
  answers: {
    ref: 'pictures',
    type: [Schema.Types.ObjectId],
    default: []
  },
  text: {
    type: String,
    default: ''
  },
  parent: {
    ref: 'pictures',
    type: Schema.Types.ObjectId,
    required: true
  },
  p_sort: {             
    type: Number,
    required: true
  },
  invisible: {        //true - картинка невидима
    type: Boolean,
    default: false
  },
  system: {           //true - картинку нельзя удалить
    type: Boolean,
    default: false
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  many: {             // для папок: true - в папке есть смена ч/б и цветных пиктограмм
    type: Boolean
  }
})

module.exports = mongoose.model('pictures', pictureSchema)