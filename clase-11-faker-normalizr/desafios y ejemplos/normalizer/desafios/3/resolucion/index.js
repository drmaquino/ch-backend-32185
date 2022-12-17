import { normalize, denormalize, schema } from "normalizr"
import fs from 'fs'

const holding = JSON.parse(fs.readFileSync('./holding.json'))

// Definimos un esquema de empleado
const empleado = new schema.Entity('empleado');

// Definimos un esquema de organigrama
const organigrama = new schema.Entity('organigrama', {
  gerente: empleado,
  encargado: empleado,
  empleados: [empleado]
});

// Definimos un esquema de grupo
const grupo = new schema.Entity('grupo', {
  empresas: [organigrama]
});

/* ---------------------------------------------------------------------------------------- */
import util from 'util'

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedHolding = normalize(holding, grupo);
print(normalizedHolding)

console.log(' ------------- OBJETO DESNORMALIZADO --------------- ')
const denormalizedHolding = denormalize(normalizedHolding.result, grupo, normalizedHolding.entities);
//print(denormalizedHolding)

console.log()

const longO = JSON.stringify(holding).length
console.log('Longitud objeto original: ', longO)

const longN = JSON.stringify(normalizedHolding).length
console.log('Longitud objeto normalizado: ', longN)

const longD = JSON.stringify(denormalizedHolding).length
console.log('Longitud objeto desnormalizado: ', longD)

const porcentajeC = (longN * 100) / longO
console.log('Porcentaje de compresión: ', porcentajeC.toFixed(2) + '%')
