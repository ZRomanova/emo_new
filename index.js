const http = require('./app')
const port = process.env.PORT || 5000
const hostname = '31.172.64.106';

http.listen(port, hostname, () => console.log(`Server has been started on ${port}`))