import express from 'express'
import { modeloPersonas } from './modeloPersonasMongoose.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


async function controladorPost(req, res) {
    const datosPersona = req.body
    // que hace el controller? delega la tarea al modelo
    const persona = await modeloPersonas.create(datosPersona)
    res.json(persona)
}

async function controladorGet(req, res) {
    const personas = await modeloPersonas.find()
    res.json(personas)
}

app.post('/', controladorPost)
app.get('/', controladorGet)

app.listen(8080, () => { console.log(`conectado a puerto 8080`) })