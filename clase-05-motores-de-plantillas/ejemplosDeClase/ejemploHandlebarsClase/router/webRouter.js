const express = require('express')

const webRouter = express.Router()

webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' })
})

webRouter.get('/datos', async (req, res) => {
    const nombres = [
        { nombre: 'a' },
        { nombre: 'b' },
        { nombre: 'c' },
    ]
    const datos = {
        nombres,
        hayNombres: Boolean(nombres.length > 0),
    }
    res.render('datos', datos)
})

module.exports = { webRouter }