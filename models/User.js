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
    type: Schema.Types.ObjectId,
    required: true
  },
  levelStatus: {    // 1 - админ, 2 - модератор, 3 - подопечный, 4 - гость, 5 - родитель
    type: Number,
    required: true
  },
  photo: {
    type: String,
    default: ''
  },
  onlineStatus: {
      type: String,
      default: '-1'
  },

  // settings  
  online: {         // показывать ли онлайны других пользователей
    type: Boolean,
    default: false
  },
  text: {           // показывать ли подписи к пиктограммам
    type: Boolean,
    default: false
  },
  view: {           // показывать, почитаны сообщения или нет
    type: Boolean,
    default: false
  },
  theme: {          // темы: 1 - сине-розовая, 2 - зелёно-фиолетовая, 3 - жёлто-оранжевая
    type: Number,
    default: 1
  },
  surnameView: {        // показывать ли фамилии
    type: Boolean,
    default: false
  },
  setting: {        // разрешить пользователю менять настройки
    type: Boolean,
    default: true
  }
    
  
})

module.exports = mongoose.model('users', userSchema)