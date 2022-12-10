import { contenedorPersonas } from './contenedorPersonas.js'
import { EnviadorDeMails } from './EnviadorDeMails.js'

function soloTieneLetras(cadena) {
    const letras = 'abcdefghijklmnopqrstuvwxyz '
    return cadena.split('').every(c => letras.includes(c.toLowerCase()))
}

class ModelPersonas {

    constructor() {
        this.contenedor = contenedorPersonas
        this.enviador = new EnviadorDeMails()
    }

    static validar({ nombre, edad }) {
        if (!nombre)
            throw new Error('nombre es un campo requerido')
        if (typeof nombre !== 'string')
            throw new Error('el nombre debe ser una cadena de caracteres')
        if (!soloTieneLetras(nombre))
            throw new Error('nombre solo puede contener letras')
        if (!edad)
            throw new Error('edad es un campo requerido')
        if (typeof edad !== 'number' || !Number.isInteger(edad))
            throw new Error('la edad debe ser un numero entero')
        return { nombre, edad }
    }

    async crearPersona(datos) {
        const datosValidados = ModelPersonas.validar(datos)
        const persona = await this.contenedor.guardar(datosValidados)
        return persona
    }

    async buscarPersonas() {
        return await this.contenedor.recuperar()
    }

    async enviarCorreosAPersonasSegunEdad(edad) {
        const personasEnRango = await this.contenedor.recuperar({ edad })
        for (const persona of personasEnRango) {
            this.enviador.enviarMail(persona.email, 'hola')
        }
    }
}

export const modeloPersonas = new ModelPersonas()
