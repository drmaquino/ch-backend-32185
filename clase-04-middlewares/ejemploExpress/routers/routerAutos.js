const { Router } = require('express')

const routerAutos = new Router()

routerAutos.get('/', (req, res) => {
    res.json({ mensaje: 'recibí una petición con método "get"' })
})

routerAutos.post('/', (req, res) => {
    res.json({ mensaje: 'recibí una petición con método "post"' })
})

module.exports = routerAutos