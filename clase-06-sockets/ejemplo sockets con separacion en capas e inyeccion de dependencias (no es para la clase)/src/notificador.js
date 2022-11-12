export default class Notificador {
    #socket
    #sockets

    constructor(socket, sockets) {
        this.#socket = socket
        this.#sockets = sockets
    }

    notificarATodos(nombreEvento, datosEvento) {
        this.#sockets.emit(nombreEvento, datosEvento)
    }
}
