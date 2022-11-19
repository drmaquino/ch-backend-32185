import { Router } from 'express'
import * as cosasApi from './api_negocio.js'

export const routerCosas = Router()

routerCosas.post('/', async (req, res) => {
    const cosaCreada = await cosasApi.crear(req.body)
    res.json(cosaCreada)
})