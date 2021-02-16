const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commandSchema = new Schema({
  img: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('commands', commandSchema)