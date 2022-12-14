import { contenedorCarrito } from './persistencia/contendorCarrito.js';
import { contenedorProducto } from './contendorProducto.js';

export async function agregarProdACarrito(idProd, idCarrito) {
    const carrito = await contenedorCarrito.obtenerPorId(idCarrito)
    const producto = await contenedorProducto.obtenerPorId(idProd)
    carrito.productos.push(producto)
    await contenedorCarrito.reemplazarPorId(carrito)
    return carrito
}