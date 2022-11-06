const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.static('public'))
app.set('views', './views')

app.engine('marian', customEngine)

app.get('/', (req, res) => {
    // res.sendFile('index.html', { root: './views' })
    const options = { contenido: 'cosas que quiero mostrar', otracosa: 'blablabla' }
    res.render('index.marian', options)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})

async function customEngine(filePath, options, callback) {
    try {
        const content = await fs.promises.readFile(filePath, 'utf-8')
        let rendered = content.toString()
        for (const key in options) {
            if (typeof options[key] === 'string') {
                rendered = rendered.replace(`{{${key}}}`, options[key])
            }
        }
        return callback(null, rendered)
    } catch (error) {
        return callback(error)
    }
}