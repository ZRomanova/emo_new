const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  sender: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  recipient: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  type: {
    type: [Number],
    required: true // 1 - картинка, 2 - текст, 3 - аудио, 4 - видео, 5 - document
  },
  message: {
    type: [String],
    required: true
},
  read: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('messages', messageSchema)