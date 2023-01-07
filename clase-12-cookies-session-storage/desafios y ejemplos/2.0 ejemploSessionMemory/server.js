import express from 'express'
import session from 'express-session'


let contador = 0

const app = express()

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next) => {
  showSession(req)
  next()
})

app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})

app.get('/sin-session', (req, res) => {
  res.json({ contador: ++contador })
})

app.get('/con-session', (req, res) => {
  if (!req.session.contador) {
    req.session.contador = 1
    res.send('Bienvenido!')
  } else {
    req.session.contador++
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})

app.get('/info', (req, res) => {
  showSession(req)
  res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

function showSession(req) {
  console.log('----------- req.signedCookies ------------')
  console.log(req.signedCookies)

  console.log('----------- req.sessionID ------------')
  console.log(req.sessionID)

  console.log('------------ req.session -------------')
  console.log(req.session)

  console.log('---------- req.sessionStore ----------')
  console.log(req.sessionStore)
}
