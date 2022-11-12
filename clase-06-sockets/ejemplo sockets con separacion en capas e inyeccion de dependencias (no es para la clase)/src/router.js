import { crearNuevoProductoControllerWS } from './controller.js'

export function manejarSocket(socket, sockets) {
    socket.on('nuevoProducto', crearNuevoProductoControllerWS(socket, sockets))
}

