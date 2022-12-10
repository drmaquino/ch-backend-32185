import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

import { modeloPersonas } from './modeloPersonas.js'

async function controladorPost(req, res) {
    const datosPersona = req.body
    try {
        const persona = await modeloPersonas.crearPersona(datosPersona)
        res.json(persona)
    } catch (error) {
        res.json({ errorMsg: error.message })
    }
}

async function controladorGet(req, res) {
    const personas = await modeloPersonas.buscarPersonas()
    res.json(personas)
}

app.post('/personas', controladorPost)
app.get('/personas', controladorGet)

app.listen(8080, () => { console.log(`conectado a puerto 8080`) })