const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
//Actualiza el precio a 5000 en los autos cuyo precio sea 1000
knex.from("cars").where("price", "1000").update({ price: 5000 })
    .then(() => {
        console.log("Car updated")
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })