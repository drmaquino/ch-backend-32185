const express = require('express')
const uploadFilesRouter = require('./routers/uploadFileRouter.js')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', uploadFilesRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
