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

      const NotRead = await Message.distinct("sender", {recipient: req.user.id, read: false})

      const withMessageUsers = await User.find(
        {_id: {$in: NotRead}, _id: {$ne: req.user.id}}
      )

      const readSenders = await Message.distinct("sender", {recipient: req.user.id, read: true})
      const readRecipients = await Message.distinct("recipient", {sender: req.user.id})

      function union_arr(arr1, arr2) {
        // объединяем массивы
        arr3 = arr1.concat(arr2);
        // сортируем полученный массив
        arr3.sort();
        // формируем новый массив без повторяющихся элементов
        var arr = [arr3[0]]; 
        for (var i = 1; i < arr3.length; i++) {
            if (arr3[i] != arr3[i-1]) {
                arr.push(arr3[i]);
            }
        }
        return arr;
      }

      const read = union_arr(readSenders, readRecipients)

      const withoutMessageUsers = await User.find(
        {_id: {$in: read}, _id: {$ne: req.user.id}, _id: {$ne: {$in: NotRead}}}
      )

      const users = {"withMessageUsers": withMessageUsers, "withoutMessageUsers": withoutMessageUsers}

      res.status(200).json(users)
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

      if (req.user.levelStatus == 4) {
        await Message.deleteMany({ $or: [
          {sender: req.user.id},
          {recipient: req.user.id}
          ]
        })
        await Picture.deleteMany({ 
          user: req.user.id
        })
      }
      res.status(200).json({message: 'Данные гостя удалены, статус пользователя обновлён.'})
    } catch(e) {
      errorHandler(res, e)
    }
  }

  module.exports.getUser = async function(req, res) {
    try {
      const user = await User.findOne({login: req.user.login}, {password: 0})
      res.status(200).json(user)
    } catch {
      errorHandler(res, e)
    }
  }
