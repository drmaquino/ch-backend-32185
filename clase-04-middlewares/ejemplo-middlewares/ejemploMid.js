const express = require('express')

const app = express()

// app.use((req, res, next)=>{
//     if (req.method =='POST') {
//         sendMail('admin@mail.com')
//     }
//     db.insert({
//         fecha: new Date(),
//         metodo: req.method
//     })
//     next()
// })

app.use((req, res, next) => {
    if (req.url.split().includes('@')) {
        res.status(400).json({ msj: 'ruta invalida' })
    } else {
        next()
    }
})

const router = express.Router()

router.use((req, res, next) => {
    console.log('llegó una peticion')
    next()
})

router.use((req, res, next) => {
    console.log(`metodo: ${req.method} - url: ${req.url}`)
    next()
})

router.use((req, res, next) => {
    req.regalito = { hola: 'chau' }
    next()
})

router.get('/', (req, res, next) => {
    res.send('ok r')
})

app.use('/r', router)

function miMiddleware(req, res, next) {
    console.log('un middleware especial')
    next()
}

app.get('/h', miMiddleware, (req, res, next) => {
    res.send('ok h')
})




/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
