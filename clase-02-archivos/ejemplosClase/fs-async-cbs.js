const fs = require('fs')

fs.readFile('./ejemplosClase/fs-async-cbs.js', 'utf-8', (err, res) => {
    if (err) console.log('hubo un error,' + err)
    else console.log(res)
    fs.writeFile('./ejemplosClase/copia.txt', err => {
        if (err) console.log('hubo un error,' + err)
        else console.log('terminé')
    })
})



// console.log(result)
console.log('estoy haciendo cosas!!')
console.log('estoy haciendo muchas cosas!!')
console.log('pucha, soy re productivo!!')

