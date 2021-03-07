const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const moment = require('moment')
const User = require('../models/User')
const keys = require('../config/keys')


module.exports.login = async function(req, res) {
  const candidate = await User.findOne({login: req.body.login}).lean()

  if (candidate) {
    // Проверка пароля, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // Генерация токена, пароли совпали
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60 * 2})

      if (candidate.levelStatus == 3 && new Date() > new Date(2021, 3, 1, 0, 0, 0)) {
        moment.lang('ru');
        const date = moment().format('DD MMMM YYYY')
        await User.updateOne(
          {_id: candidate._id},
          {$addToSet: {loginDates: date}},
          {new: true}
        )
      }
      

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


