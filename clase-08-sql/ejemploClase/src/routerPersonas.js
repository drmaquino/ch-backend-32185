import { Router } from 'express';
import { contenedorDePersonas } from './contenedorDePersonas.js';
import { randomUUID as generarId } from 'crypto'

export const routerPersonas = Router();

routerPersonas.post('/', async (req, res) => {
    const nuevaPersona = req.body
    nuevaPersona.id = generarId()
    await contenedorDePersonas.guardar(nuevaPersona)
    res.json(nuevaPersona);
});

routerPersonas.get('/', async (req, res) => {
    res.json(await contenedorDePersonas.recuperar());
});