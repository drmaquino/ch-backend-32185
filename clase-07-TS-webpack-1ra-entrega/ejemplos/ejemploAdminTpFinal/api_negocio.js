import crypto from 'crypto'
import Contenedor from './Contenedor.js';

const cosas = new Contenedor()

export function crear(datos) {
    datos.id = crypto.randomUUID()
    cosas.guardarNuevo(datos)
    return datos
}