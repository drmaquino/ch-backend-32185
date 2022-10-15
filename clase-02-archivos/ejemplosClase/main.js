// quiero a partir de un nombre, mostrar un saludo a ese nombre

// esto no queremos en el curso!
function saludar(nombre) {
    const mensaje = `hola, ${nombre}`;
    console.log(mensaje)
}

//======================

//esto sí
function crearSaludo(nombre) {
    return `hola, ${nombre}`
}

function mostrarMensaje(mensaje) {
    console.log(mensaje)
}

//--------

const saludo = crearSaludo('marian')
mostrarMensaje(saludo)

//-------

function crearSaludoEnfatico(nombre) {
    return crearSaludo(nombre) + '!!!'
}

function crearSaludoTriston(nombre) {
    return crearSaludo(nombre) + '...'
}

//--------

function crearSaludoConEstadoDeAnimo(nombre, aplicarEmocion) {
    return aplicarEmocion(crearSaludo(nombre))
}

// const saludoConEmocion = crearSaludoConEstadoDeAnimo(
//     'marian',
//     function gritar(saludo) { return `${saludo}!!!` }
// )

const saludoConEmocion = crearSaludoConEstadoDeAnimo('marian', saludo => `${saludo}!!!`)


function sumar(n1) {
    return function sumarN1(n2) {
        return n1 + n2
    }
}

const sumar5 = sumar(5)
const resultado = sumar5(8)
console.log(resultado)
console.log(sumar5(10))