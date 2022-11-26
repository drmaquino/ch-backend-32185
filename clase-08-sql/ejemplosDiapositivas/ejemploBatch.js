const { options } = require("./options/mysql.js")
const knex = require("knex")(options);
async function main() {
    const cars = [
        { name: "Audi", price: 1000 },
        { name: "Renault", price: 1000 },
        { name: "Fiat", price: 1000 },
        { name: "Hummer", price: 1000 },
        { name: "Toyota", price: 1000 },
    ]

    try {
        console.log("Borramos todos los autos")
        await knex("cars").del()
        console.log("Insertamos autos")
        await knex("cars").insert(cars)
        console.log("Leemos todos los autos")
        let rows = await knex.from("cars").select("*")
        for (const row of rows) console.log(`${row["id"]} ${row["name"]} ${row["price"]}`)
        console.log("Insertamos un auto más")
        await knex("cars").insert({ name: "Fiat", price: 7777 })
        console.log("Leemos la data actualizada")
        rows = await knex("cars")
        for (const row of rows) console.log(`${row["id"]} ${row["name"]} ${row["price"]}`)
    } catch (e) {
        console.log(e)
    }
    finally {
        knex.destroy()
    }
}

main()