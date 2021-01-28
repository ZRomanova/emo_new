const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
  participants: {
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String 
  },
  event: {
    ref: 'events',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('groups', groupSchema)