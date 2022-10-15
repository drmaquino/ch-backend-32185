// function probar() {
//     const nombre = 'marian'
//     // let nombre = "marian"
//     let saludo = `hola,
//     soy ${nombre}`
//     let edad = 10

//     console.log(nombre)
//     console.log(edad)
//     console.log(saludo)

//     edad = edad + 5

//     console.log(edad)

//     const diccionario = {
//         color: 'rojo',
//         ciudad: 'rio'
//     }


//     console.log(diccionario)
//     console.log(diccionario.color)
//     console.log(diccionario['color'])

//     // const array = {
//     //     '0': 'mariano',
//     //     '1': 'will',
//     //     '2': 'laura',
//     //     'length: 3
//     // }

//     const array = [
//         'mariano',
//         'will',
//         'laura',
//     ]

//     array = []

//     console.log(array[0])

//     array.push('otto')

//     console.log(array)


// }

// probar()

class Persona {
    #nombre
    #colores

    constructor(nombre) {
        this.#nombre = nombre
        this.#colores = []
    }

    obtenerNombre() {
        return this.#nombre
    }

    obtenerColores() {
        return this.#colores
    }

    agregarColor(color) {
        this.#colores.push(color)
    }
}

// for (let i = 0; i < array.length; i++) {

// }

// while () {

// }

// array.splice(posicion5, borrar2elementos)

/*

*/


const p1 = new Persona('marian')
// const p1 = Persona.constructor('marian') // no existe esto!

const p2 = new Persona('mily')

p1.agregarColor('verde')

p2.agregarColor('rojo')

console.log(p1.obtenerNombre())
console.log(p1.obtenerColores())
console.log(p2.obtenerNombre())
console.log(p2.obtenerColores())