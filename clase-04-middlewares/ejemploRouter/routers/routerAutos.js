const { Router } = require('express')

const autos = []

const routerAutos = new Router()

routerAutos.get('/', (req, res) => {
    res.json(autos)
})

routerAutos.post('/', (req, res) => {
    autos.push(req.body)
    res.json(req.body)
})

module.exports = routerAutos