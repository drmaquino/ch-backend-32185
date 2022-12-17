import express from 'express'
import { faker } from '@faker-js/faker'
faker.locale = 'es'

let id = 1
function getNextId() {
    return id++
}

function crearCombinacionAlAzar(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.color.human()
    }
}

function generarNPersonas(cant) {
    const personas = []
    for (let i = 0; i < cant; i++) {
        personas.push(crearCombinacionAlAzar(getNextId()))
    }
    return personas
}

const CANT_PERS_DEFAULT = 10

const app = express()

app.get('/api/personas', (req, res) => {
    const cant = Number(req.query.cant) || CANT_PERS_DEFAULT
    res.json(generarNPersonas(cant))
})

const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log(`Servidor Http Mocking escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
