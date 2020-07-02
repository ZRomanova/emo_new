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
    type: Date,
    required: true
  },
  levelStatus: {
    type: Number,
    required: true
  },
  sex: {
    type: Number,
    required: true
  },
  institution: {
    ref: 'institutions',
    type: Schema.Types.ObjectId
  },
  photo: {
    type: String,
    default: ''
  },
  setting: [
    {
      online: {
        type: Boolean,
        default: False
      },
      text: {
        type: Boolean,
        default: False
      },
      view: {
        type: Boolean,
        default: False
      }
    }
  ],
  onlineStatus: {
      type: String,
      default: '-1'
  }
})

module.exports = mongoose.model('users', userSchema)