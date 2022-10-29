const express = require('express')

const app = express()

const mensajeDeError = 'se rompio todo!'

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})

function mid1(req, res, next) {
    req.dato1 = 'un dato'
    next()
}

function mid2(req, res, next) {
    req.dato2 = 'otro dato'
    next()
}

app.get('/ruta-rota', (req, res, next) => {
    try {
        throw Error(mensajeDeError)
    } catch (error) {
        next(error)
    }
})

app.get('/ruta1', mid1, (req, res) => {
    res.json({
        dato1: req.dato1
    })
})

app.get('/ruta2', mid1, mid2, (req, res) => {
    res.json({
        dato1: req.dato1,
        dato2: req.dato2
    })
})

app.get('/rota', (req, res, next) => {
    try {
        throw Error(mensajeDeError)
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    if (err.message == mensajeDeError) {
        res.status(500).json({ error: mensajeDeError })
    } else {
        next(err)
    }
})

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
