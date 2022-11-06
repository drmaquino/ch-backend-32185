const express = require('express')
const { engine } = require('express-handlebars')

const personas = []

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('personas', { personas, hayPersonas: personas.length > 0 });
});

app.post('/personas', (req, res) => {
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
