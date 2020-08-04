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
  read: {           // показывать, почитаны сообщения или нет
    type: Boolean,
    default: false
  },
  firstColor: {          // первый цвет: 1 - розовый, 2 - оранжевый, 3 - жёлтый, 4 - зелёный, 5 - голубой, 6 - фиолетовый, 7 - коричневый
    type: Number,
    default: 5
  },
  secondColor: {          // второй цвет
    type: Number,
    default: 1
  },
  surnameView: {        // показывать ли фамилии
    type: Boolean,
    default: false
  },
  setting: {        // 0 - не разрешать менять настройки, 1 - разрешать менять только цвета, 2 - разрешать менять все настройки
    type: Number,
    default: 1
  }
    
  
})

module.exports = mongoose.model('users', userSchema)