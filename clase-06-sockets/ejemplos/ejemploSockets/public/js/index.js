const socket = io() // apunta al localhost:8080

socket.on('mi mensaje', data => {
    console.log('(cliente) ' + data)

    socket.emit('msg-cliente', `(cliente) recibi: ${data}`)
})

socket.on('heartbeat', () => {
    console.log('todo ok')
})

function saludar() {
    socket.emit('saludo', 'saludos desde el cliente!')
}

const botonSaludar = document.getElementById('botonSaludar')
botonSaludar.addEventListener('click', e => {
    saludar()
})