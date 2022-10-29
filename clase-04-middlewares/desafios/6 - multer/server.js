const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Multer config */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

/* ------------------------------------------------------ */
/* Rutas */
app.post('/subir', upload.single('miArchivo'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Error subiendo archivo')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(`Archivo <b>${file.originalname}</b> subido exitosamente`)
})

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
