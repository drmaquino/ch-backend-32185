import assert from 'assert'
import { faker } from '@faker-js/faker'
faker.locale = 'es'
import { Sistema } from '../src/Sistema.js'
import EnviadorDeMailsMock from '../src/EnviadorDeMailsMock.js'
import EnviadorDeMailsGmail from '../src/EnviadorDeMailsGmail.js'

const enviador = new EnviadorDeMailsMock()
// const enviador = new EnviadorDeMailsGmail()

const sistema = new Sistema(enviador)

//=============================================================

// al cargar un usuario, comienza sin deuda

const usuario1 = sistema.cargarUsuario(faker.name.firstName(), faker.internet.email())

// verificacion: 
assert.strictEqual(sistema.obtenerDeuda(usuario1.id), 0)

//=============================================================

// si cargo un gasto, se le asigna a su usuario

sistema.cargarGasto({
    monto: 1000,
    descripcion: faker.commerce.productName(),
    participantes: [usuario1.id]
})

// verificacion: 
assert.strictEqual(sistema.obtenerDeuda(usuario1.id), 1000)

//=============================================================

const usuario2 = sistema.cargarUsuario(faker.name.firstName(), faker.internet.email()) // { id: 2, nombre: 'Luis' }

sistema.cargarGasto({
    monto: 1000,
    descripcion: faker.commerce.productName(),
    participantes: [usuario1.id, usuario2.id]
})

// verificacion: 
assert.strictEqual(sistema.obtenerDeuda(usuario1.id), 1500)
assert.strictEqual(sistema.obtenerDeuda(usuario2.id), 500)

//=============================================================

// for (const idUsuario in sistema.usuarios) {
//     console.log(sistema.usuarios[idUsuario])
// }

//-----------------------------------------------------------------

// viajes: id, titulo, descripcion
// usuarios: id, nombre
// gastos: viaje (id), fecha, monto, descripcion, participantes (ids)

// crear viaje, asignarles participantes

// CASO DE USO a
// cargar gastos, especificando:
// a que viaje corresponde
// el monto
// quienes participan

// CASO DE USO b
// mostrar resumen de gastos:
// dado un viaje, muestra cuanto tiene que pagar cada participante