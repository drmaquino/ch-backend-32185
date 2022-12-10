function satisface(objeto, criterio) {
    for (const key in criterio) {
        if (!objeto[key] || objeto[key] !== criterio[key]) {
            return false
        }
    }
    return true
}

export class ContenedorMemoria {

    constructor() {
        this.coleccion = []
    }

    guardar(cosa) {
        this.coleccion.push(cosa)
    }

    recuperar(criterio = {}) {
        return this.coleccion.find(obj => satisface(obj, criterio))
    }
}
