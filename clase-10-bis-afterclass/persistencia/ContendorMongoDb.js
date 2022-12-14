import mongoClient from '../../mongoclient.js'
class ContenedorMongoDb {
    constructor(nombreColeccion) {
        this.nombreColeccion = nombreColeccion
        this.collection = mongoClient.db().collection(nombreColeccion)
    }

    async guardar(obj) {
        try {
            obj._id = obj.id
            delete obj.id
            await this.collection.insertOne(obj)
        } catch (error) {
            throw new Error(`${this.nombreColeccion} no encontrado`)
        }
    }

    async obtenerPorId(id) {
        const obj = await this.collection.findOne({ _id: id })
        if (!obj) throw new Error(`${this.nombreColeccion} no encontrado`)
        obj.id = obj._id
        delete obj._id
        return obj
    }

    async reemplazarPorId(obj) {
        try {
            obj._id = obj.id
            delete obj.id
            await this.collection.replaceOne(obj)
        } catch (error) {
            throw new Error(`${this.nombreColeccion} no encontrado`)
        }
    }
}
}
