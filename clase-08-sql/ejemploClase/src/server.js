import express from 'express'
import { routerPersonas } from './routerPersonas.js'
import { routerAutos } from './routerAutos.js'

export const app = express()

app.use(express.json())

app.use('/api/personas', routerPersonas)
app.use('/api/autos', routerAutos)