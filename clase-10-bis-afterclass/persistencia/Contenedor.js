export class Contenedor {
    constructor(nombreObjeto) {
        this.nombreObjeto = nombreObjeto
        this.objetos = [];
    }

    guardar(obj) {
        this.objetos.push(obj);
    }

    obtenerPorId(id) {
        const obj = this.objetos.find(o => o.id === id);
        if (!obj)
            throw new Error(`${this.nombreObjeto} no encontrado`);
        return obj;
    }

    reemplazarPorId(obj) {
        const indice = this.objetos.findIndex(o => o.id === obj.id);
        if (indice === -1)
            throw new Error(`${this.nombreObjeto} no encontrado`);
        this.objetos[indice] = obj
    }
}
