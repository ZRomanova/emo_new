const http = require('./app')
const port = process.env.PORT || 5000
const host = process.env.HOST || '0.0.0.0';
console.log('index', host)

http.listen(port, host, () => console.log(`Server has been started on ${port}`))