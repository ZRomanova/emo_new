const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pictureSchema = new Schema({  
  folder: {             //true - folder, false - picture
    type: Boolean,
    default: false
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
    type: Schema.Types.ObjectId
  },
  p_sort: {             
    type: Number,
    require: true
  },
  invisible: {
    type: Boolean
  }
})

module.exports = mongoose.model('pictures', pictureSchema)