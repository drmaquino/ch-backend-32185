const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
//Elimina los autos cuyo precio es mayor a 500
knex.from("cars").where("price", ">", "500").del()
    .then(() => console.log("Matching cars deleted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })