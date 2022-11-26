import express from 'express'
import { clienteSql } from './clienteSql.js'

const app = express()

app.get('/', (req, res) => {
    // acá puedo usar el cliente sql!
    res.end()
})

app.listen(8080, () => {
    console.log('servidor conectado!')
})

