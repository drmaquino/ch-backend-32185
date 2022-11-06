const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const nombres = [
        { nombre: 'a' },
        { nombre: 'b' },
        { nombre: 'c' },
    ]
    const datos = {
        nombres,
        hayNombres: Boolean(nombres.length > 0),
    }
    res.render('datos', datos)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})