import { randomUUID as generarId } from 'crypto'

export class Sistema {
    constructor(enviadorDeMails) {
        this.enviadorDeMails = enviadorDeMails
        this.usuarios = {};
    }

    obtenerDeuda(idUsuario) {
        let montoTotal = 0;
        this.usuarios[idUsuario].gastos.forEach(gasto => {
            montoTotal += gasto.monto;
        });
        return montoTotal;
    }

    cargarUsuario(nombreUsuario, email) {
        const usuario = { id: generarId(), nombre: nombreUsuario, email, gastos: [] };
        this.usuarios[usuario.id] = usuario;
        this.enviadorDeMails.enviar(email, 'registro exitoso', `usted se ha registrado correctamente. su id es ${usuario.id}`)
        return usuario;
    }

    cargarGasto({ monto, descripcion, participantes }) {
        const cantParticipantes = participantes.length
        const montoIndividual = monto / cantParticipantes
        for (const idParticipante of participantes) {
            const gasto = { monto: montoIndividual, descripcion }
            this.usuarios[idParticipante].gastos.push(gasto)
        }
    }
}
