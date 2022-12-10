import { mongoDatabase } from './mongoClient.js';

export class ContenedorMongoDb {

    constructor(nombreColeccion) {
        this.coleccion = mongoDatabase.collection(nombreColeccion);
    }

    async guardar(cosa) {
        await this.coleccion.insertOne(cosa)
    }

    async recuperar(criterio = {}) {
        return await this.coleccion.find(criterio).toArray()
    }
}
