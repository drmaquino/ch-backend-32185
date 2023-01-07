import express from 'express'
import session from 'express-session'

/* ------------------------------------------------*/
/*           Persistencia por redis Lab            */
/*            https://redislabs.com/               */
/* ------------------------------------------------*/
import redis from 'redis'
import connectRedis from 'connect-redis'
const RedisStore = connectRedis(session)

// -------------------- CLIENTE --------------------------
const REDIS_URI = 'redis-16095.c44.us-east-1-2.ec2.cloud.redislabs.com'
const REDIS_PORT = 16095
const REDIS_PASSWORD = '79QDKkkfbbSk84JSmIUusG1REmGle6YL'

const client = redis.createClient({
    url: `redis://default:${REDIS_PASSWORD}@${REDIS_URI}:${REDIS_PORT}`,
    legacyMode: true
})

await client.connect()


/* ----------------------------------------------------- */

const app = express()
app.use(session({
    /* ----------------------------------------------------- */
    /*           Persistencia por redis database             */
    /* ----------------------------------------------------- */
    store: new RedisStore({
        client: client,
        ttl: 300
    }),
    /* ----------------------------------------------------- */

    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false/* ,
    cookie: {
        maxAge: 40000
    } */
}))

app.get('/', (req, res) => {
    res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req, res) => {
    res.send({ contador: ++contador })
})

app.get('/con-session', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
})

app.get('/info', (req, res) => {
    console.log('------------ req.session -------------')
    console.log(req.session)
    console.log('--------------------------------------')

    console.log('----------- req.sessionID ------------')
    console.log(req.sessionID)
    console.log('--------------------------------------')

    console.log('----------- req.cookies ------------')
    console.log(req.cookies)
    console.log('--------------------------------------')

    console.log('---------- req.sessionStore ----------')
    console.log(req.sessionStore)
    console.log('--------------------------------------')

    res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

