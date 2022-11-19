export default class Contenedor {
    #elementos
    constructor() {
        this.#elementos = []
    }
    guardarNuevo(elem) {
        this.#elementos.push(elem)
    }
    actualizar(elem) {
        const index = this.#elementos.findIndex(e => e.id === elem.id)
        if (index !== -1) {
            this.#elementos[index] = elem
        }
    }
    recuperar() {
        return this.#elementos
    }
}