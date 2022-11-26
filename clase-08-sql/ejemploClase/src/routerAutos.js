import { Router } from 'express';
import { contenedorDeAutos } from './contenedorDeAutos.js';
import { randomUUID as generarId } from 'crypto'

export const routerAutos = Router();

routerAutos.post('/', async (req, res) => {
    const nuevaPersona = req.body
    nuevaPersona.id = generarId()
    await contenedorDeAutos.guardar(nuevaPersona)
    res.json(nuevaPersona);
});

routerAutos.get('/', async (req, res) => {
    res.json(await contenedorDeAutos.recuperar());
});