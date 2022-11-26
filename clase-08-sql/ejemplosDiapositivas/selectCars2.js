const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
//El ejemplo devuelve los coches cuyo precio es superrior a 999
knex.from("cars").select("name", "price").where("price", ">", "999")
    .then((rows) => {
        for (const row of rows) {
            console.log(`${row[ "name" ]} ${row[ "price" ]}`)
        }
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })