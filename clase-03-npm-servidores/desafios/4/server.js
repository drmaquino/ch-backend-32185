const http = require('http')

const getMensaje = () => {
    const hora = new Date().getHours()

    if (hora >= 6 && hora <= 12) {
        return 'Buenos dias!'
    } else if (hora >= 13 && hora <= 19) {
        return 'Buenas tardes!'
    } else if ((hora >= 20 && hora <= 23) || (hora >= 0 && hora <= 5)) {
        return 'Buenas noches!'
    }
}

const server = http.createServer((req, res) => {
    res.end(getMensaje())
})

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
