const bcrypt = require('bcryptjs')

const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

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
        photo: req.body.photo,
        setting: req.body.setting,
      })
  
      try {
        await user.save()
        res.status(201).json(user)
      } catch(e) {
        errorHandler(res, e)
      }
  
    }
  }

module.exports.update = function(req, res) {
    
}

module.exports.getAll= function(req, res) {
    
}

module.exports.getByInstitution = function(req, res) {
    
}

module.exports.getByUserID = function(req, res) {
    
}

module.exports.remove = function(req, res) {
    
}