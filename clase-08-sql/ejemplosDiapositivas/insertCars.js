const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
const cars = [
    { name: "Audi", price: 1000 },
    { name: "Renault", price: 1000 },
    { name: "Fiat", price: 1000 },
    { name: "Hummer", price: 1000 },
    { name: "Toyota", price: 1000 },
]
//Seleccionamos la tabla de autos e insertamos 5 filas con el método insert
knex("cars").insert(cars)
    .then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })