const express = require('express')
const app = express()

const authRoutes = require('./routes/login')
const chatRoutes = require('./routes/chat')
const peopleRoutes = require('./routes/people')
const picturesRoutes = require('./routes/pictures')
const usersRoutes = require('./routes/users')


app.use('api/auth', authRoutes)
app.use('api/chat', chatRoutes)
app.use('api/people', peopleRoutes)
app.use('api/manage/pictures', picturesRoutes)
app.use('api/manage/users', usersRoutes)

module.exports = app