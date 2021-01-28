const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  autor: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  moderators: {
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  participants: {
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  hide: {
    ref: 'users',
    type: [Schema.Types.ObjectId]
  },
  wait: {
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
  description: {
    type: String
  },
  place: {
    type: String
  },
  cost: {
    type: Number
  }
})

module.exports = mongoose.model('events', eventSchema)