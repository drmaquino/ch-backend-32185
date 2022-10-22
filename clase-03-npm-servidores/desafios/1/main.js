const numeros = {}

function getAleatorio() {
    return parseInt(Math.random() * 20) + 1
}

for (let i = 0; i < 10000; i++) {
    const numero = getAleatorio()
    if (!numeros[numero]) {
        numeros[numero] = 0
    }
    numeros[numero]++
}

console.log(numeros)
