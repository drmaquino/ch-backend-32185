import express from 'express'
import { routerCosas } from './rutas_controladores.js'

const app = express()

app.use(express.json())

let esAdmin = false

function soloParaAdmins(req, res, next) {
    if (esAdmin) {
        next()
    } else {
        res.sendStatus(403)
    }
}

app.post('/login', (req, res) => {
    esAdmin = true
    res.sendStatus(200)
})

app.post('/logout', (req, res) => {
    esAdmin = false
    res.sendStatus(200)
})

app.get('/publico', (req, res) => {
    res.send('soy un endpoint publico')
})

app.post('/privado', soloParaAdmins, (req, res) => {
    res.send('soy un endpoint privado')
})

app.use('/api/cosas', routerCosas)

app.all('*', (req, res) => {
    res.status(404).json(/*no implementada!*/)
})

const puerto = process.env.PORT ?? 8080

app.listen(puerto, () => {
    console.log('escuchando en 8080!')
})