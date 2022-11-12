const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

app.get('/', () => {
    res.send('OK')
})

io.on('connection', socket => {
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Usuario conectado: ' + socket.id)

    // Se imprimirá solo la primera vez que se ha abierto la conexión    
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')

    socket.on('msg-cliente', data => {
        console.log(`(server) recibi: ${data}`)
    })

    socket.on('saludo', data => {
        console.log(`(server) recibi: ${data}`)
    })

    io.sockets.emit('mi mensaje', 'esto lo recibe todo el mundo')

    // setInterval(() => { socket.emit('heartbeat', 'estoy vivo') }, 3000)
})

const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en puerto ${server.address().port}`)
})