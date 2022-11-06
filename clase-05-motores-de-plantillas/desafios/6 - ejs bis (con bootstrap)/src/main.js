const express = require('express')

const personas = []

const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', { personas });
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
