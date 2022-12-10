import { firestoreDatabase } from './firestoreClient.js';

function asObj(ref) {
    return { id: ref.id, ...ref.data() }
}

export class ContenedorFirestore {

    constructor(nombreColeccion) {
        this.coleccion = firestoreDatabase.collection(nombreColeccion)
    }

    async guardar(cosa) {
        const ref = await this.coleccion.add(cosa)
        return { ...cosa, id: ref.id }
    }

    async recuperar(criterio = {}) {
        const snapshot = await this.coleccion.get()
        const result = []
        snapshot.forEach(doc => {
            result.push(asObj(doc))
        })
        return result
    }
}
