const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const personas = []

//--------------------------------------------
// configuro el socket

io.on('connection', socket => {
    // console.log('Nuevo cliente conectado!');

    // carga inicial de personas
    socket.emit('personas', personas);

    // actualizacion de personas
    socket.on('update', persona => {
        personas.push(persona)
        io.sockets.emit('personas', personas);
    })
});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
