import { agregarProdACarrito } from './modelo.js'

export async function postCarrito(req, res, next) {
    try {
        const { idProd } = req.body
        const { idCarrito } = req.params
        const carritoActualizado = await agregarProdACarrito(idProd, idCarrito)
        res.json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}