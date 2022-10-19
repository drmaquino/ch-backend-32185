const fs = require('fs')

const { randomUUID } = require('crypto')

class Contenedor {
    #elementos
    constructor() {
        this.#elementos = []
    }

    guardar(elemento) {
        this.#elementos.push(elemento)
    }

    recuperarTodos() {
        return this.#elementos
    }
}

class ContenedorArchivo {
    #elementos
    #ruta
    constructor(ruta) {
        this.#ruta = ruta
        this.#elementos = []
    }

    async guardar(elemento) {
        this.#elementos.push(elemento)
        await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))

    }

    async recuperarTodos() {
        this.#elementos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
        return this.#elementos
    }
}

async function test() {
    // const contenedor = new Contenedor()

    const rutaArchivo = './elementos.txt'
    await fs.promises.writeFile(rutaArchivo, '[]')
    const contenedor = new ContenedorArchivo(rutaArchivo)

    await contenedor.guardar({
        id: randomUUID(),
        nombre: 'blabla'
    })

    await contenedor.guardar({
        id: randomUUID(),
        nombre: 'blablabla'
    })

    console.log(await contenedor.recuperarTodos())
}

test()