import express from 'express'
import { randomUUID } from 'crypto'
import cookieParser from 'cookie-parser'

const PALABRA_SECRETA = 'milanesa'

const app = express()

app.use(cookieParser(PALABRA_SECRETA))

const usuarios = {}
const fichero = {}

app.use(express.json())

app.post('/registro', (req, res) => {
  const { dni } = req.body
  const idUsuario = randomUUID()
  usuarios[dni] = idUsuario
  fichero[idUsuario] = []
  res.cookie('nroSocio', idUsuario, { signed: true, maxAge: 1000 * 60 * 60 * 24 * 7 })
  res.sendStatus(201)
})

app.post('/login', (req, res) => {
  const { dni } = req.body
  res.cookie('nroSocio', usuarios[dni], { signed: true, maxAge: 1000 * 60 * 60 * 24 * 7 })
  res.sendStatus(200)
})

function buscarFicha(req, res, next) {
  const idUsuario = req.signedCookies?.nroSocio
  if (!idUsuario) {
    return res.sendStatus(401)
  }
  req.ficha = fichero[idUsuario]
  next()
}

app.post('/prestamos', buscarFicha, (req, res) => {
  const { idLibro } = req.body
  // @ts-ignore
  req.ficha.push(idLibro)
  res.sendStatus(201)
})























// uso query para mostarlo desde el navegador tambien!
app.get('/login', (req, res) => {
  const { username, password } = req.query

  if (username !== 'pepe' || password !== 'pepepass') {
    return res.send('login failed')
  }

  req.session.user = username
  req.session.admin = true
  res.send('login success!')
})

function auth(req, res, next) {
  if (req.session.user === 'pepe' && req.session.admin) {
    return next()
  }
  return res.status(401).send('error de autorización!')
}

app.get('/privado', auth, (req, res) => {
  res.send('si estas viendo esto es porque ya te logueaste!')
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

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
