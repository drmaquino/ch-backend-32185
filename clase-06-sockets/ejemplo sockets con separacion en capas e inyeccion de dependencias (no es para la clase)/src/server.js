// ruteo
import express from 'express';
import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

import { manejarSocket } from './router.js'

io.on('connection', (socket) => {
    manejarSocket(socket, io.sockets)
})

//======================================================

const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en puerto ${server.address().port}`)
})