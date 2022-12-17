import express from 'express'

const nombres = [ 'Luis', 'Lucía', 'Juan', 'Augusto', 'Ana' ]
const apellidos = [ 'Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei' ]
const colores = [ 'rojo', 'verde', 'azul', 'amarillo', 'magenta' ]

function getRandomElem(arr) {
    return arr[ Math.floor(arr.length * Math.random()) ]
}

function crearCombinacionAlAzar() {
    return {
        nombre: getRandomElem(nombres),
        apellido: getRandomElem(apellidos),
        color: getRandomElem(colores),
    }
}

function generarNPersonas(cant) {
    // return Array.from(new Array(10), (v,i) => crearCombinacionAlAzar())
    const personas = []
    for (let i = 0; i < cant; i++) {
        personas.push(crearCombinacionAlAzar())
    }
    return personas
}

const app = express()

const CANT_PERS_DEFAULT = 10

app.get('/api/personas', (req, res) => {
    res.json(generarNPersonas(CANT_PERS_DEFAULT))
})

const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log(`Servidor Http Mocking escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
