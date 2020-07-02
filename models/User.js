const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date
  },
  sex: {            //1 - boy, 2 - girl
    type: Number,
    required: true
  },
  institution: {
    ref: 'institutions',
    type: Schema.Types.ObjectId
  },
  levelStatus: {    // 1 - admin, 2 - модератор, 3 - подопечный, 4 - гость
    type: Number,
    required: true
  },
  photo: {
    type: String,
    default: ''
  },
  setting: [
    {
      online: Boolean,
      text: Boolean,
      view: Boolean
    }
  ],
  onlineStatus: {
      type: String,
      default: '-1'
  }
})

module.exports = mongoose.model('users', userSchema)