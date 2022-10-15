const fs = require('fs')

const promesaDeContenido = fs.promises.readFile('./ejemplosClase/fs-sync.js', 'utf-8')
promesaDeContenido
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


const promesaDeEscritura = fs.promises.writeFile('./prueba.txt', 'esto es una prueba')
promesaDeEscritura
    .then(() => { console.log('terminé de escribir') })
    .catch(error => { console.log(error) })


console.log('todas las operaciones han comenzado')