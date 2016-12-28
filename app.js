const express = require('express')
const path = require('path')
const logger = require('morgan')
const useragent = require('express-useragent')
const debug = require('debug')('avar:server')
const http = require('http')

let app = express()

app.use(useragent.express())
app.use(logger('dev'))

// In development, serve assets from node app
let dev = process.env.DEBUG || false
if (dev) {
  app.use('/css', express.static(path.join(__dirname, 'css')))
  app.use('/img', express.static(path.join(__dirname, 'img')))
  app.use('/js', express.static(path.join(__dirname, 'js')))
  app.use('/fonts', express.static(path.join(__dirname, 'fonts')))
}


let mobile = path.join(__dirname, 'index.mob.html')
let desktop = path.join(__dirname, 'index.html')

app.use('/', (req, res) => {
  let page = (req.useragent.isMobile) ? mobile : desktop
  res.sendFile(page)
})

let port = process.env.PORT || '3000'
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
