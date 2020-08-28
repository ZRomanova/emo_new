const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pictureSchema = new Schema({  
  folder: {             //true - folder, false - picture
    type: Boolean,
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
  textForGirls: {
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
  many: {             // для папок: 0 - в папке нет смены ч/б и цветных пиктограмм, 1 - есть, пол определяется по пользователю, 2 - есть, пол определяется по собеседнику
    type: Number
  },
  exceptions: {
    ref: 'users',
    type: [Schema.Types.ObjectId],
    default: []
  },
  color: {
    type: Number
  }
})

module.exports = mongoose.model('pictures', pictureSchema)