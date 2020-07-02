const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  sender: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  recipient: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  time: {
    type: Date,
    default: Date.now
  },
  type: {
    type: [Number] // 1 - картинка, 2 - текст, 3 - аудио, 4 - видео
  },
  message: {
    type: [String]
},
  read: {
    type: Boolean,
    default: False
  }
})

module.exports = mongoose.model('messages', messageSchema)