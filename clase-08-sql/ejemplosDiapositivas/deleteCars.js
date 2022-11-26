const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
//Elimina todos los autos
knex.from("cars").del()
    .then(() => console.log("All cars deleted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })