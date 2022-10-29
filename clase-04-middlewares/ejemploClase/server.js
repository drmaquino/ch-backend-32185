const express = require('express')
const { routerWeb } = require("./routers/routerWeb.js")
const { routerApi } = require("./routers/routerApi.js")

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('archivos'))
app.use('/views', express.static('views'))

// rutas
app.use('/', routerWeb)
app.use('/api/cosas', routerApi)

const server = app.listen(8080, () => {
    console.log(`conectado y escuchando en puerto ${server.address().port}`)
})