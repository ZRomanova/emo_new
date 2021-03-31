const mongoose = require('mongoose')
const Schema = mongoose.Schema

const institutionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String
  }
})

module.exports = mongoose.model('institutions', institutionSchema)