const { Router } = require('express')

const bicicletas = []

const routerBicicletas = new Router()

routerBicicletas.get('/', (req, res) => {
    res.json(bicicletas)
})

routerBicicletas.post('/', (req, res) => {
    bicicletas.push(req.body)
    res.json(req.body)
})

module.exports = routerBicicletas