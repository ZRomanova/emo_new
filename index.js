const http = require('./app')
const port = process.env.PORT || 5000

http.listen(port, () => console.log(`Server has been started on ${port}`))