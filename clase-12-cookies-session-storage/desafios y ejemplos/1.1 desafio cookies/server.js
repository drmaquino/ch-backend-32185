import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser('montoto'))

app.use(express.json())

app.post('/cookies', (req, res) => {
  const { nombre, valor, tiempo } = req.body
  console.log(nombre, valor, tiempo)

  if (!nombre || !valor) {
    return res.json({ error: 'falta nombre ó valor' })
  }

  if (tiempo) {
    res.cookie(nombre, valor, { signed: true, maxAge: 1000 * parseInt(tiempo) })
  } else {
    res.cookie(nombre, valor, { signed: true })
  }
  res.json({ proceso: 'ok' })
})

app.get('/cookies', (req, res) => {
  res.json({ normales: req.cookies, firmadas: req.signedCookies })
})

app.delete('/cookies/:nombre', (req, res) => {
  const { nombre } = req.params
  if (!req.cookies[nombre] && !req.signedCookies[nombre]) {
    res.json({ error: 'nombre de cookie invalido' })
  } else {
    res.clearCookie(nombre)
    res.json({ proceso: 'ok' })
  }
})

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))
