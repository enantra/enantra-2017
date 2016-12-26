const express = require('express')
const path = require('path')
const logger = require('morgan')
const useragent = require('express-useragent')
const debug = require('debug')('avar:server')
const http = require('http')

let app = express()

app.use(useragent.express())
app.use(logger('dev'))

let mobile = path.join(__dirname, 'index.mob.html')
let desktop = path.join(__dirname, 'index.html')

app.use('/', (req, res) => {
  let page = (req.useragent.isMobile) ? mobile : desktop
  res.sendFile(page)
})

let port = '3000'
app.set('port', port)

let server = http.createServer(app)

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening () {
  let addr = server.address()
  let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
  debug('Listening on ' + bind)
}

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
