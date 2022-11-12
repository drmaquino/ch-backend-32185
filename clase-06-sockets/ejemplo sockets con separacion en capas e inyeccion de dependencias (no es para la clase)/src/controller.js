import ProductoService from './service.js'
import Notificador from './notificador.js'

import * as DaoFactory from './dao.js'

const daoProductos = DaoFactory.getDao()

export function crearNuevoProductoControllerWS(socket, sockets) {
    return async function (datosProducto) {
        const notificador = new Notificador(socket, sockets)
        const productoService = new ProductoService(daoProductos, notificador)
        await productoService.agregarProducto(datosProducto)
    }
}

