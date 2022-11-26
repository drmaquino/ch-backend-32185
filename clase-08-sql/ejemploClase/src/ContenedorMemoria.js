export class ContenedorMemoria {
    constructor() {
        this.cosas = [];
    }

    guardar(cosa) {
        this.cosas.push(cosa);
    }

    recuperar() {
        return this.cosas;
    }
}
