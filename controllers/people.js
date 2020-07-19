const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')
const Picture = require('../models/Picture')
const Message = require('../models/Message')

module.exports.friends = async function(req, res) {
  try {
    await User.updateOne(
      {_id: req.user.id}, 
      {$set: {onlineStatus: '0'}},
      {new: true}) 

      const withMessageUsers = await User.find({
        
      })

      const withoutMessageUsers = await User.find({
        
      })

      res.status(200).json(withMessageUsers, withoutMessageUsers)
    } catch(e) {
      errorHandler(res, e)
    }
  }

module.exports.search = async function(req, res) {
  
    q = {}
    
    if (req.query.institution) {
      q.institution = req.query.institution
    }
  
    if (req.query.name) {
      q.name = req.query.name
    } 
  
    if (req.query.surname) {
      q.surname = req.query.surname
    } 
  
    if (req.query.sex) {
      q.sex = req.query.sex
    }  
  
    try {
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {onlineStatus: '0'}},
        {new: true})

      const users = await User
        .find(q, {name: 1, surname: 1, birthDate: 1, onlineStatus: 1})
        .sort({name: 1, surname: 1})
      res.status(200).json(users)
    } catch (e) {
      errorHandler(res, e)
    }
  }

  module.exports.exitDelete = async function(req, res) {
    try {
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {onlineStatus: '-1'}},
        {new: true}) 

      if (req.user.levelStatus === 4) {
        await Message.deleteMany({ $or: [
          {sender: req.user.id},
          {recipient: req.user.id}
          ]
        })
      }
      res.status(200).json({message: 'Данные гостя удалены, статус пользователя обновлён.'})
    } catch(e) {
      errorHandler(res, e)
    }
  }
