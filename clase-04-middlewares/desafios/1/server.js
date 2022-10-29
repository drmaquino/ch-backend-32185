const express = require('express')

const app = express()

const frase = 'Hola mundo como están'

app.get('/api/frase', (req, res) => {
    res.json({ frase })
})

app.get('/api/letras/:num', (req, res) => {
    const num = parseInt(req.params.num)

    if (isNaN(num)) {
        return res.json({ error: 'El parámetro ingresado no es un número' })
    }

    if (num < 1 || num > frase.length) {
        return res.json({ error: 'El parámetro está fuera de rango' })
    }

    res.json({ letra: frase[ num - 1 ] })
})

app.get('/api/palabras/:num', (req, res) => {
    const num = parseInt(req.params.num)

    if (isNaN(num)) {
        return res.json({ error: 'El parámetro ingresado no es un número' })
    }

    const palabras = frase.split(' ')

    if (num < 1 || num > palabras.length) {
        return res.json({ error: 'El parámetro está fuera de rango' })
    }

    res.json({ palabra: palabras[ num - 1 ] })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
