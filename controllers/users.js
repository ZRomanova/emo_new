const bcrypt = require('bcryptjs')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const { query } = require('express')

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
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        login: req.body.login,
        password: bcrypt.hashSync(password, salt),
        name: req.body.name,
        surname: req.body.surname,
        birthDate: req.body.birthDate,
        sex: req.body.sex,
        institution: req.body.institution,
        levelStatus: req.body.levelStatus,
        photo: req.file ? req.file.path : ''
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
  try {
    const updated = req.body

    if (req.file) {
      updated.photo = req.file.path
    }
    
    const thisuser = await User.findOneAndUpdate(
      {_id: req.params.userID},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(thisuser)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getAll = async function(req, res) {
  q = {}
  
  if (req.query.institution) {
    q.institution =  req.query.institution
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
    q.levelStatus =  req.query.levelStatus
  } 

  try {
    const users = await User
      .find(q)
      .sort({surname: 1})
    res.status(200).json(users)
  } catch (e) {
    errorHandler(res, e)
  }
}

/*
module.exports.getByInstitution = async function(req, res) {
  try {
    const users = await User
    .find({institution: req.params.institutionID})
    .sort({surname: 1})
    res.status(200).json(users)
  } catch (e) {
    errorHandler(res, e)
  }
}
*/

module.exports.getByUserID = async function(req, res) {
  try {
    const thisuser = await User.findOne({_id: req.params.userID})
    res.status(200).json(thisuser)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req, res) {
  try {
    await User.deleteOne({_id: req.params.userID})
    res.status(200).json({
      message: 'Пользоатель удален.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}