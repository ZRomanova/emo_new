const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')
const Message = require('../models/Message')
const Picture = require('../models/Picture')

module.exports.getAllMessage = async function(req, res) {   
    try {
      const friend = req.query.friend
      const me = req.user.id

      await Message.updateMany(
        {sender: friend, recipient: me}, 
        {$set: {read: true}},
        {new: true})

      const messages = await Message
        .find({ $or: [
            {sender: me, recipient: friend},
            {sender: friend, recipient: me}
          ]
        })
        .sort({time: 1})
      res.status(200).json(messages)
    } catch (e) {
      errorHandler(res, e)
    }
  }

module.exports.getAllPictures = async function(req, res) {
    try {
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {onlineStatus: req.query.friend}},
        {new: true})

      const pictures = await Picture
      .find({parent: req.params.parentID, invisible: {$ne: true}}, {answers: 0, system: 0})
      .sort({p_sort: 1})
      res.status(200).json(pictures)
    } catch (e) {
      errorHandler(res, e)
    }
  }

module.exports.send = async function(req, res) {
    try { 
        const status = await User.findOne({_id: req.query.friend}, {onlineStatus: 1, _id: 0})

        const message = await new Message({
          sender: req.user.id,
          recipient: req.query.friend,
          message: req.body.message,
          type: req.body.type,
          read: status.onlineStatus == req.user.id ? true : false
        }).save()
        res.status(201).json(message)
      } catch (e) {
        errorHandler(res, e)
      }
}

module.exports.remove = async function(req, res) {
  try {
    await Message.deleteOne({_id: req.params.messageID})
    res.status(200).json({
      message: 'Сообщение удалено.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.removeAll = async function(req, res) {
  try {
    const friend = req.query.friend
    const me = req.user.id

    await Message.deleteMany({ $or: [
      {sender: me, recipient: friend},
      {sender: friend, recipient: me}
  ] 
  })
    res.status(200).json({
      message: 'Сообщения удалены.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
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
            .findOne({parent: '5f1309e3962c2f062467f854'})
            .sort({p_sort: -1})

          const maxSort = lastPicture ? lastPicture.p_sort : 0

          const pictures = await new Picture({
            folder: false,
            boysGreyPicture: file.path,
            parent: '5f1309e3962c2f062467f854',
            p_sort: maxSort + 1,
            user: req.user.id
          }).save()
          res.status(201).json(pictures)
        }

        if (file.mimetype === 'video/mp4' 
        || file.mimetype === 'video/x-msvideo' 
        || file.mimetype === 'video/mpeg'
        || file.mimetype === 'video/ogg'
        || file.mimetype === 'video/webm'
        || file.mimetype === 'video/quicktime'
        || file.mimetype === 'video/avi') 
        {
          const lastPicture = await Picture
            .findOne({parent: '5f1309f1962c2f062467f855'})
            .sort({p_sort: -1})

          const maxSort = lastPicture ? lastPicture.p_sort : 0

          const pictures = await new Picture({
            folder: false,
            boysGreyPicture: file.path,
            parent: '5f1309f1962c2f062467f855',
            p_sort: maxSort + 1,
            user: req.user.id
          }).save()
          res.status(201).json(pictures)
        }

        if (file.mimetype === 'audio/mpeg3' 
        || file.mimetype === 'audio/mpeg3' 
        || file.mimetype === 'audio/mod'
        || file.mimetype === '	audio/x-mod') 
        {
          const lastPicture = await Picture
            .findOne({parent: '5f130a00962c2f062467f856'})
            .sort({p_sort: -1})

          const maxSort = lastPicture ? lastPicture.p_sort : 0

          const pictures = await new Picture({
            folder: false,
            boysGreyPicture: file.path,
            parent: '5f130a00962c2f062467f856',
            p_sort: maxSort + 1,
            user: req.user.id
          }).save()
          res.status(201).json(pictures)
        }

        else {
          const lastPicture = await Picture
            .findOne({parent: '5f130a0d962c2f062467f857'})
            .sort({p_sort: -1})

          const maxSort = lastPicture ? lastPicture.p_sort : 0

          const pictures = await new Picture({
            folder: false,
            boysGreyPicture: file.path,
            parent: '5f130a0d962c2f062467f857',
            p_sort: maxSort + 1,
            user: req.user.id
          }).save()
          res.status(201).json(pictures)
        }
      }
    }
    res.status(201).json({message: 'Файлы загружены.'})
  } catch (e) {
    errorHandler(res, e)
  }
}