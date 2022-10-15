const fs = require('fs')

// ejecutar en la terminal:
// npm init -y
// antes de correr el archivo!

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error(`Error en lectura: ${error}`)
    }

    console.log('package.json: lectura exitosa')

    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length
    }

    console.log(info)

    fs.writeFile('info.txt', JSON.stringify(info, null, 2), error => {
        if (error) {
            throw new Error(`Error en escritura: ${error}`)
        }
        console.log('info.txt: escritura exitosa')
    })
})
