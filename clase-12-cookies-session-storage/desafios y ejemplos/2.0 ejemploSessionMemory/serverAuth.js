import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  // cookie: {
  //   maxAge: 150000
  // }
}))

// uso query para mostarlo desde el navegador tambien!
app.get('/login', (req, res) => {
  const { username, password } = req.query

  if (username !== 'pepe' || password !== 'pepepass') {
    return res.status(401).send('login failed')
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
  console.log(req.session)
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
