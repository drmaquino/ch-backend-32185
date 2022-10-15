const fs = require('fs')

try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString())
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
}


try {
    const contenido = fs.readFileSync('4-fechaYHora.js', 'utf-8')
    console.log(contenido)
} catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
}
