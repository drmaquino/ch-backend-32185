const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use('/static', express.static('static'))

const nombres = [
    { nombre: 'a' },
    { nombre: 'b' },
    { nombre: 'c' },
    { nombre: 'd' },
]

app.get('/datos', (req, res) => {
    res.sendFile('main.html', { root: './views' })
})

app.get('/api/datos', (req, res) => {
    res.json(nombres)
})

io.on('connection', socket => {
    socket.emit('nombres', nombres)
    socket.on('actualizar', () => {
        socket.emit('nombres', nombres)
    })
})

const PORT = 8080
const server = httpServer.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})