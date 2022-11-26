const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
//Seleccionamos todas las filas con la función select(). Esta vez hemos elegido la tabla con la función from().Luego revisamos la matriz de filas devuelta e imprimomos los campos
knex.from("cars").select("*")
    .then((rows) => {
        for (const row of rows) {
            console.log(`${row[ "id" ]} ${row[ "name" ]} ${row[ "price" ]}`)
        }
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })