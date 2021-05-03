const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  autor: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  moderator: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  participants: {     //участники
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  hide: {           //отказались участвовать
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  wait: {           //не ответили на запрос
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  date: {
    type: Date
  },
  type: {
    type: Number,
    required: true 
  },
  description: {   //описание
    type: String
  },
  address: {        //адрес
    type: String
  },
  cost: {       //стоимость
    type: Number
  },
  status: {     
    type: Number,   //0 - ожидание, 1 - принято, рассылка, -1 - отклонено, 2 - завершено
    required: true
  },
  chatImage: {
    type: String
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  institution: {
    ref: 'institutions',
    type: Schema.Types.ObjectId
  },
  mailingTime: {
    type: Date
  },
  closingTime: {
    type: Date
  },
  photolikes: {
    type: [String]
  },
  chatTitle: {
    type: String
  },
  likes: {
    ref: 'users',
    type: [Schema.Types.ObjectId]
  }
})

module.exports = mongoose.model('events', eventSchema)