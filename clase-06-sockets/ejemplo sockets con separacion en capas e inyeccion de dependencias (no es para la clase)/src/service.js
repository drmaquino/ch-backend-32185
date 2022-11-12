import Id from './Id.js'
import Producto from './Producto.js'

export default class ProductoService {
    constructor(daoProductos, notificador) {
        this.daoProductos = daoProductos
        this.notificador = notificador
    }

    async agregarProducto(datosProducto) {
        const idProducto = Id.new()
        const producto = new Producto(idProducto, datosProducto)
        await this.daoProductos.guardar(producto)
        this.notificador.notificarATodos('productos', producto)
        return producto
    }
}


