const bcrypt = require('bcryptjs')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const { query } = require('express')
const Institution = require('../models/Institution')
const Message = require('../models/Message')

module.exports.create = async function(req, res) {

    // login password
    const candidate = await User.findOne({login: req.body.login})
  
    if (candidate) {
      // Пользователь существует, нужно отправить ошибку
      res.status(409).json({
        message: 'Такой логин уже занят. Попробуйте другой.'
      })
    } else {
      // Нужно создать пользователя
      let institution
      if (req.user.levelStatus == 2) institution = req.user.institution
      else institution = req.body.institution

      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        login: req.body.login,
        password: bcrypt.hashSync(password, salt),
        name: req.body.name,
        surname: req.body.surname,
        birthDate: req.body.birthDate,
        sex: req.body.sex,
        institution: institution,
        levelStatus: req.body.levelStatus,
        photo: req.file ? req.file.location : (req.body.sex == '2' ? '/images/girl.png' : '/images/boy.png'),
        online: req.body.online,
        text: req.body.text,
        read: req.body.read,
        firstColor: req.body.firstColor,
        secondColor: req.body.secondColor,
        surnameView: req.body.surnameView,
        setting: req.body.setting,
        vote: req.body.vote,
        sentence: req.body.sentence,
        answers: req.body.answers,
        change: req.body.change,
        defaultColor: req.body.defaultColor,
        birthdays: req.body.birthdays
      })
  
      try {
        await user.save()
        res.status(201).json(user)
      } catch(e) {
        errorHandler(res, e)
      }
  
    }
  }

module.exports.update = async function(req, res) {
  console.log(req.file)
  try {
    if ((req.user.levelStatus == 2 && req.body.institution == req.user.institution && req.body.levelStatus != 1) || req.user.levelStatus == 1) {
      if (!req.body.login) {
        const updated = req.body

        if (req.body.password) {
          const salt = bcrypt.genSaltSync(10)
          const password = req.body.password
          updated.password = bcrypt.hashSync(password, salt)
        }

        if (req.file) {
          updated.photo = req.file.location
        }
        
        const thisuser = await User.findOneAndUpdate(
          {_id: req.params.userID},
          {$set: updated},
          {new: true}
        )
        res.status(200).json(thisuser)
      }
      else {
        const candidate = await User.findOne({login: req.body.login})
    
        if (candidate) {
          // Пользователь существует, нужно отправить ошибку
          res.status(409).json({
            message: 'Такой логин уже занят. Попробуйте другой.'
          })
        } 
        else {
          const updated = req.body

          if (req.body.password) {
            const salt = bcrypt.genSaltSync(10)
            const password = req.body.password
            updated.password = bcrypt.hashSync(password, salt)
          }

          if (req.file) {
            updated.photo = req.file.location
          }
          
          const thisuser = await User.findOneAndUpdate(
            {_id: req.params.userID},
            {$set: updated},
            {new: true}
          )
          res.status(200).json(thisuser)
        }
      }
    }
    else {
      res.status(403).json({
        message: 'Недостаточно прав для совершения действия.'
      })
    }
  }
  catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getAll = async function(req, res) {
  q = {}
  if (req.user.levelStatus != 1) {
    q.institution = req.user.institution
  } else {
    if (req.query.institution) {
      q.institution =  req.query.institution
    }
  }

  if (req.query.name) {
    q.name =  req.query.name
  } 

  if (req.query.surname) {
    q.surname =  req.query.surname
  } 

  if (req.query.sex) {
    q.sex =  req.query.sex
  } 

  if (req.query.levelStatus) {
    let roles = req.query.levelStatus.split(',')
    q.levelStatus = {$in: roles}
  } 

  if (req.query.login) {
    q.login =  req.query.login
  }

  try {
    const now = new Date();
      await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})
        
    let users = await User
      .find(q, {loginDates: 0})
      .sort({surname: 1, name: 1})
      .skip(+req.query.offset)
      .limit(+req.query.limit)
      .lean()

    for (let user of users) {
      let institutionName = await Institution.findOne({_id: user.institution}, {_id: 0}) // {name: 'Name'}
      user.institutionName = institutionName.name
    }

    res.status(200).json(users)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getByUserID = async function(req, res) {
  try {
    let user = await User.findOne({_id: req.params.userID})
    const institution = await Institution.findOne({_id: user.institution}, {_id: 0})
    user.institutionName = institution.name
    res.status(200).json(user)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req, res) {
  try { 
    if (req.params.userID != req.user.id && ((req.user.levelStatus == 2 && req.body.institution == req.user.institution && req.body.levelStatus != 1) || req.user.levelStatus == 1)) {
      await User.deleteOne({_id: req.params.userID})
      await Message.deleteMany({
        $or: [{recipient: req.params.userID}, {sender: req.params.userID}]
      })
      res.status(200).json({
        message: 'Пользователь удален.'
      })
    }
    else {
      res.status(403).json({
        message: 'Недостаточно прав для совершения действия.'
      })
    }
    
  } catch (e) {
    errorHandler(res, e)
  }
}