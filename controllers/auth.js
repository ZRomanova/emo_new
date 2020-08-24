const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')


module.exports.login = async function(req, res) {
  const candidate = await User.findOne({login: req.body.login})

  if (candidate) {
    // Проверка пароля, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // Генерация токена, пароли совпали
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60 * 2})

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      // Пароли не совпали
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова.'
      })
    }
  } else {
    // Пользователя нет, ошибка
    res.status(404).json({
      message: 'Пользователь с таким login не найден.'
    })
  }
}


