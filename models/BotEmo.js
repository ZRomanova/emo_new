const mongoose = require('mongoose')
const Schema = mongoose.Schema

const botSchema = new Schema({
  img: {
    type: String
  }
})

module.exports = mongoose.model('bot', botSchema)