const mongoose = require('mongoose')
const Schema = mongoose.Schema

const institutionSchema = new Schema({
  name: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('institutions', institutionSchema)