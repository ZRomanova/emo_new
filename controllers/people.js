const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')
const Picture = require('../models/Picture')
const Message = require('../models/Message')

module.exports.friends = async function(req, res) {
  try {
    const now = new Date();
    await User.updateOne(
      {_id: req.user.id}, 
      {$set: {onlineStatus: '0', last_active_at: now}},
      {new: true}) 

      function compareTime(a, b) {
        if (a.time < b.time) {
          return 1
        }
        if (a.time > b.time) {
          return -1
        }
        return 0
      }

      const NotRead = await Message.distinct("sender", {recipient: req.user.id, read: false})

      const withMessageUsers = await User.find(
        { _id: {$ne: req.user.id, $in: NotRead}}, {name: 1, 
          surname: 1, photo: 1, birthDate: 1, onlineStatus: 1, last_active_at: 1}
      ).lean()

      for (let user of withMessageUsers) {
        const message = await Message
          .findOne({sender: user._id, recipient: req.user.id, read: false}).sort({time: -1})
        user.time = message.time
      }

      withMessageUsers.sort(compareTime)

      const readSenders = await Message.distinct("sender", {recipient: req.user.id, read: true})
      const readRecipients = await Message.distinct("recipient", {sender: req.user.id})

      function union_arr(arr1, arr2) {
        // объединяем массивы
        let arr3 = arr1.concat(arr2);
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
        {_id: {$in: read, $ne: req.user.id, $nin: NotRead}}, 
        {name: 1, surname: 1, photo: 1, birthDate: 1, onlineStatus: 1, last_active_at: 1}
      ).lean()

      for (let user of withoutMessageUsers) {
        const message = await Message
          .findOne({$or: [
            {sender: user._id, recipient: req.user.id}, 
            {sender: req.user.id, recipient: user._id}
          ]}).sort({time: -1})
        user.time = message.time
      }

      withoutMessageUsers.sort(compareTime)

      const users = {withMessageUsers, withoutMessageUsers}

      res.status(200).json(users)
    } catch(e) {
      errorHandler(res, e)
    }
  }

module.exports.search = async function(req, res) {
    try {
      const now = new Date();
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {onlineStatus: '0', last_active_at: now}},
        {new: true}) 
        
      const users = await User
        .find({institution: req.params.instID, $or: [ { levelStatus: { $ne: 4} }, { onlineStatus: { $ne: '-1'} } ], _id: { $ne: req.user._id } }, 
          {name: 1, surname: 1, birthDate: 1, onlineStatus: 1, photo: 1, last_active_at: 1})
        .sort({name: 1, surname: 1}).lean()
      
      for (let user of users) {
        const message = await Message
          .findOne({sender: user._id, recipient: req.user.id, read: false})
        if (message) user.letter = true
        else user.letter = false
      }

      res.status(200).json(users)
    } catch (e) {
      errorHandler(res, e)
    }
  }

  module.exports.toPictures = async function(req, res) {
    try {       
      const users = await User
        .find({institution: req.params.instID}, 
          {name: 1, surname: 1, login: 1})
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
          user: req.user.id, parent: {$in: 
            ['5f1309e3962c2f062467f854', '5f1309f1962c2f062467f855', '5f130a00962c2f062467f856', 
            '5f130a0d962c2f062467f857', '5f5486f982194ca1fb21ff6d', '603e1ae80c54fc9b6e417951',
            '603e1b0c0c54fc9b6e417952','603e1b430c54fc9b6e417953', '603e1b630c54fc9b6e417954',
            '603e1ba10c54fc9b6e417955'
          ]}
        })
      }
      res.status(200).json({message: 'Данные гостя удалены, статус пользователя обновлён.'})
    } catch(e) {
      errorHandler(res, e)
    }
  }

  module.exports.exitLogout = async function(req, res) {
    try {
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {onlineStatus: '-1'}},
        {new: true}) 

      res.status(200).json({message: 'Cтатус пользователя обновлён.'})
    } catch(e) {
      errorHandler(res, e)
    }
  }

  module.exports.getUser = async function(req, res) {
    try {
      const user = await User.findOne({login: req.user.login}, {password: 0})
      res.status(200).json(user)
    } catch(e) {
      errorHandler(res, e)
    }
  }

  module.exports.update = async function(req, res) {
    try {
      const now = new Date();
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})

      const user = await User.findOneAndUpdate(
        {_id: req.user.id},
        {$set: req.body},
        {new: true})
      res.status(200).json(user)
    } catch {
      errorHandler(res, e)
    }
  }
