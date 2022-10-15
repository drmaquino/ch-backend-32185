const fs = require('fs')

async function main() {
    try {
        const resultado = await fs.promises.readFile('./ejemplosClase/fs-sync.js', 'utf-8')
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }

    try {
        await fs.promises.writeFile('./prueba.txt', 'esto es una prueba')
        console.log('terminé de escribir')
    } catch (error) {
        console.log(error)
    }

    console.log('todas las operaciones han comenzado')
}

main()

//======================================

const a = [1, 2, 3, 4, 5]

async function bla() {
    await fs.promises.writeFile(ruta, JSON.stringify(a))
    JSON.parse(await fs.promises.readFile(ruta, 'utf-8'))
}

bla()