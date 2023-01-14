
const http = require('http')
const routes = require('./routes') // here routes is locked and we can edit from the outside
console.log(routes.someText)
const server = http.createServer(routes.handler) // because we use a object
//const server = http.createServer(routes) // createserver and execute the function the whatever that is inside the paranthereces

server.listen(4000)