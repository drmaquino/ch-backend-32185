const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const handlebarsConfig = {
  // extname: 'hbs',
  // defaultLayout: 'index.hbs'
  defaultLayout: 'index.handlebars'
}

app.engine('handlebars', exphbs(handlebarsConfig))

app.set('view engine', 'handlebars')

app.set('views', './views')

app.get('/', (req, res) => {
  res.render('datos', {
    nombre: 'coder',
    apellido: 'house',
    edad: 25,
    email: 'coder@house',
    telefono: '12345678'
  })
})

app.listen(8080)