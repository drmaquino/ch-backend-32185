const alfabeto = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'o', 'n', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', ' ', '"', '{', '}', ',', ':',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'o', 'n', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', ' ', '"', '{', '}', ',', ':',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
]

function cifrarLetra(letra, corrimiento) {
    const index = alfabeto.findIndex(l => l === letra)
    const nuevoIndice = index + corrimiento
    return alfabeto[nuevoIndice]
}

function cifrarFrase(frase, corrimiento) {
    return frase.split('').map(letra => cifrarLetra(letra, corrimiento)).join('')
}

// console.log(cifrarLetra('x', 6))
// console.log(cifrarFrase('que bueno esta el curso', 6))

function firmar(objeto, secreto) {
    objeto.firma = cifrarFrase(JSON.stringify(objeto), secreto.length)
    return objeto
}

const PALABRA_SECRETA = 'marian'
// console.log(firmar({ hola: 'mundo' }, PALABRA_SECRETA))

function validar(objeto) {
    const firmaOriginal = objeto.firma
    delete objeto.firma
    const { firma: firmaNueva } = firmar(objeto, PALABRA_SECRETA)
    return firmaNueva === firmaOriginal
}

// { saldo: 100, firma: '32ygrjt267ff4' }

console.log(validar({ saldo: 100, firma: '32ygrjt267ff4' }))
console.log(validar({ saldo: 200, firma: '32ygrjt267ff4' }))