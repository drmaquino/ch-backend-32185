const fs = require('fs')
const MotorDePlantillas = require('./motorDePlantillas.js')

const textoPlantilla = fs.readFileSync('./index.plantilla', 'utf-8')

const generarHtml = MotorDePlantillas.compilar(textoPlantilla)

const contexto = {
    nombre: 'marian',
    apellido: 'aquino',
    cantVisitas: 2
}

const html = generarHtml(contexto)

// console.log(html)

fs.writeFileSync('index.html', html)