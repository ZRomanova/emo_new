const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')

const authRoutes = require('./routes/auth')
const chatRoutes = require('./routes/chat')
const peopleRoutes = require('./routes/people')
const picturesRoutes = require('./routes/pictures')
const usersRoutes = require('./routes/users')
const institutionsRoutes = require('./routes/institutions')
const botRoutes = require('./routes/bot')
const eventsRoutes = require('./routes/events')
const groupRoutes = require('./routes/group')
const keys = require('./config/keys')

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io').listen(http)

io.on('connection', (socket) => {
    socket.on('in-chat', (id) => {
        socket.join(id)
        socket.join(id + '-online')
    })

    socket.on('in-group', (data) => {
      socket.join(data.group)
      io.in(data.group).emit('online', data.id)
    })

    socket.on('new message', (data) => {
        io.in(data.id).emit('new message', {message: data.message})
    })

    socket.on('new-group-message', (data) => {
      io.in(data.group).emit('new-group-message', data.message)
    })

    socket.on('online', (id) => {
        io.in(id + '-online').emit('online', id)
    })

    socket.on('leave room', (id) => {
        socket.leave(id)
        socket.leave(id + '-online')
    })

    socket.on('leave group room', (id) => {
      socket.leave(id)
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
app.use('/images', express.static('images'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/login', authRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/people', peopleRoutes)
app.use('/api/bot', botRoutes)
app.use('/api/events', eventsRoutes)
app.use('/api/group', groupRoutes)
app.use('/api/manage/pictures', picturesRoutes)
app.use('/api/manage/users', usersRoutes)
app.use('/api/manage/institutions', institutionsRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'))
  
    const allowed = [
      '.js',
      '.css',
      '.png',
      '.jpg',
      '.jpeg',
      '.cur',
      '.ico'
    ];
   
    // Catch all other routes and return the angular index file
    app.get('*', (req, res) => {
       if (allowed.includes(path.extname(req.path))) {
          res.sendFile(path.join(__dirname, `client/dist/client/${req.path}`));
       } else {
          res.sendFile(path.join(__dirname, 'client/dist/client/index.html'));
       }
    })
  }

module.exports = http
