const mongoose = require('mongoose')
const errorHandler = require('../utils/errorHandler');
const User = require('../models/User');
const Picture = require('../models/Picture');
const GroupMessage = require('../models/GroupMessage');
const Event = require('../models/Event');

module.exports.send = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})

        const group = req.params.groupID

        let read = []
        let wait = []

        const event =  await Event.findOne({_id: group})
        for (let participant of event.participants) {
            const status = await User.findOne({_id: participant._id}, {onlineStatus: 1, _id: 0})
            if (status.onlineStatus == group && !read.includes(participant._id)) read.push(participant._id)
            else if (!wait.includes(participant._id)) wait.push(participant._id)
        }

        const message = await new GroupMessage({
            sender: req.user.id,
            group,
            type: req.body.type,
            message: req.body.message,
            read,
            wait
        }).save()

        res.status(201).json(message)

    } catch (e) {
        errorHandler(res, e) 
    }
}

module.exports.remove = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})

        await GroupMessage.deleteOne({_id: req.params.messageID})
        res.status(200).json({
            message: 'Сообщение удалено.'
        })

    } catch (e) {
        errorHandler(res, e) 
    }
}

module.exports.getAll = async function(req, res) {
    try {
        const id = mongoose.Types.ObjectId(req.user.id);
        const now = new Date();
        await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now, onlineStatus: req.params.groupID}},
        {new: true})

        const messages = await GroupMessage.find({group: req.params.groupID}).lean()

        for (let message of messages) {
            const sender = await User.findOne({_id: message.sender}, {name: 1, photo: 1})
            message.senderName = sender.name
            message.senderPhoto = sender.photo 
        }

        await GroupMessage.updateMany(
          {group: req.params.groupID},
          {$pull: {wait: id}},
          {new: true}
        )

        await GroupMessage.updateMany(
          {group: req.params.groupID},
          {$addToSet: {read: id}},
          {new: true}
        )

        res.status(200).json(messages)

    } catch (e) {
        errorHandler(res, e) 
    }
}

module.exports.getById = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})

        const message = await GroupMessage.findOne({_id: req.params.id})

        res.status(200).json(message)

    } catch (e) {
        errorHandler(res, e) 
    }
}

module.exports.create = async function(req, res) {
    const now = new Date();
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true}) 
  
    function randomInteger(min, max) {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  
    try {
      if (req.files) {
        const files = req.files
        for (let file of files) {
  
          if (file.mimetype === 'image/png' 
          || file.mimetype === 'image/jpeg' 
          || file.mimetype === 'image/jpg'
          || file.mimetype === 'image/gif'
          || file.mimetype === 'image/webp') 
          {
            const lastPicture = await Picture
              .findOne({parent: '603e1ae80c54fc9b6e417951', user: req.user.id})
              .sort({p_sort: -1})
  
            const maxSort = lastPicture ? lastPicture.p_sort : 0
  
            const pictures = await new Picture({
              folder: false,
              boysGreyPicture: file.location,
              parent: '603e1ae80c54fc9b6e417951',
              p_sort: maxSort + 1,
              user: req.user.id
            }).save()
          }
  
          else if (file.mimetype === 'video/mp4' 
          || file.mimetype === 'video/x-msvideo' 
          || file.mimetype === 'video/mpeg'
          || file.mimetype === 'video/ogg'
          || file.mimetype === 'video/webm'
          || file.mimetype === 'video/quicktime'
          || file.mimetype === 'video/avi') 
          {
            const lastPicture = await Picture
              .findOne({parent: '603e1b0c0c54fc9b6e417952', user: req.user.id})
              .sort({p_sort: -1})
  
            const maxSort = lastPicture ? lastPicture.p_sort : 0
  
            const pictures = await new Picture({
              folder: false,
              boysGreyPicture: file.location,
              parent: '603e1b0c0c54fc9b6e417952',
              p_sort: maxSort + 1,
              user: req.user.id
            }).save()
          }
  
          else if (file.mimetype === 'audio/mpeg3' 
          || file.mimetype === 'audio/x-mpeg3' 
          || file.mimetype === 'audio/mod'
          || file.mimetype === 'audio/x-mod'
          || file.mimetype === 'audio/mpeg'
          || file.mimetype === 'audio/x-mpeg'
          || file.mimetype === 'audio/ogg'
          || file.mimetype === 'audio/wav'
          || file.mimetype === 'audio/webm') 
          {
            const lastPicture = await Picture
              .findOne({parent: '603e1b430c54fc9b6e417953', user: req.user.id})
              .sort({p_sort: -1})
  
            const maxSort = lastPicture ? lastPicture.p_sort : 0
  
            const pictures = await new Picture({
              folder: false,
              boysGreyPicture: file.location,
              parent: '603e1b430c54fc9b6e417953',
              p_sort: maxSort + 1,
              user: req.user.id,
              text: file.originalname,
              color: randomInteger(1, 12)
            }).save()
          }
  
          else {
            const lastPicture = await Picture
              .findOne({parent: '603e1b630c54fc9b6e417954', user: req.user.id})
              .sort({p_sort: -1})
  
            const maxSort = lastPicture ? lastPicture.p_sort : 0
  
            const pictures = await new Picture({
              folder: false,
              boysGreyPicture: file.location,
              parent: '603e1b630c54fc9b6e417954',
              p_sort: maxSort + 1,
              user: req.user.id,
              text: file.originalname,
              color: randomInteger(1, 12)
            }).save()
          }
        }
      }
      res.status(201).json({message: 'Файлы загружены.'})
    } catch (e) {
      errorHandler(res, e)
    }
  }
  
  module.exports.vote = async function (req, res) {

    const now = new Date();
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})
  
    function randomInteger(min, max) {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    try {
      
      const lastPicture = await Picture
        .findOne({parent: '603e1ba10c54fc9b6e417955', user: req.user.id})
        .sort({p_sort: -1})
  
      const maxSort = lastPicture ? lastPicture.p_sort : 0
  
      const vote = await new Picture({
        folder: false,
        boysGreyPicture: req.file.location,
        parent: '603e1ba10c54fc9b6e417955',
        p_sort: maxSort + 1,
        user: req.user.id,
        text: 'Моё голосовое сообщение',
        color: randomInteger(1, 12)
      }).save()
  
      res.status(201).json(vote)
    } catch(e) {
      errorHandler(res, e)
    }
  }
