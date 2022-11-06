const express = require('express')
const { webRouter } = require('./router/webRouter.js')
const { engine } = require('express-handlebars')

const app = express()

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(webRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})