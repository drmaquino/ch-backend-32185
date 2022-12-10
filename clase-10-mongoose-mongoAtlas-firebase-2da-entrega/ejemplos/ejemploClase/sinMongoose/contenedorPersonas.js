import { PERSISTENCIA } from './config/config.js'
import { ContenedorFirestore } from './contenedores/ContenedorFirestore.js'
import { ContenedorMemoria } from './contenedores/ContenedorMemoria.js'
import { ContenedorMongoDb } from './contenedores/ContenedorMongoDb.js'

let contenedorPersonas

switch (PERSISTENCIA) {
    case 'mongodb':
        contenedorPersonas = new ContenedorMongoDb('productos')
        break
    case 'firestore':
        contenedorPersonas = new ContenedorFirestore('productos')
        break
    default:
        contenedorPersonas = new ContenedorMemoria()
}

export { contenedorPersonas }