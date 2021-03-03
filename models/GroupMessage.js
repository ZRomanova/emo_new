const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupmessageSchema = new Schema({
  sender: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  group: {
    ref: 'events',
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
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  wait: {
    ref: 'users',
    type: [Schema.Types.ObjectId]
  }
})

module.exports = mongoose.model('group_messages', groupmessageSchema)