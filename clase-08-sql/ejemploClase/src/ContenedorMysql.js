export class ContenedorMysql {
    constructor(clienteMysql, tabla) {
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    async guardar(cosa) {
        await this.cliente(this.tabla).insert(cosa);
    }

    async recuperar() {
        return await this.cliente(this.tabla).select();
    }
}
