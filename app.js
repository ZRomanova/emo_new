const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const chatRoutes = require('./routes/chat')
const peopleRoutes = require('./routes/people')
const picturesRoutes = require('./routes/pictures')
const usersRoutes = require('./routes/users')
const institutionsRoutes = require('./routes/institutions')
const keys = require('./config/keys')

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {perMessageDeflate: false})

io.on('connection', (socket) => {
    socket.on('in-chat', (id) => {
        socket.join(id)
    })

    socket.on('new message', (data) => {
        io.in(data.id).emit('new message', {message: data.message})
    })

    socket.on('leave room', (id) => {
        socket.removeAllListeners(id)
        socket.leave(id)
        console.log('leave room', id)
    })
  })
 
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/login', authRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/people', peopleRoutes)
app.use('/api/manage/pictures', picturesRoutes)
app.use('/api/manage/users', usersRoutes)
app.use('/api/manage/institutions', institutionsRoutes)

module.exports = http