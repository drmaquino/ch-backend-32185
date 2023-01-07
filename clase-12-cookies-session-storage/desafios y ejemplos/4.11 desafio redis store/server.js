import express from 'express'
import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'
const RedisStore = connectRedis(session)

const client = redis.createClient({ legacyMode: true })
await client.connect()

const app = express()

app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 60
    }),
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

const getNombreSession = req => req.session.nombre ? req.session.nombre : ''

app.get('/', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`${getNombreSession(req)} visitaste la página ${req.session.contador} veces.`)
    } else {
        let { nombre } = req.query
        req.session.nombre = nombre
        req.session.contador = 1
        res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
    }
})

app.get('/olvidar', (req, res) => {
    let nombre = getNombreSession(req)
    req.session.destroy(err => {
        if (!err) res.send(`Hasta luego ${nombre}`)
        else res.send({ error: 'olvidar', body: err })
    })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
