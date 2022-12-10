import { MongoClient } from 'mongodb'

const host = 'localhost'
const port = '27017'

const username = 'root'
const password = 'mongopassword'

const nombreDB = 'coderhouse'

const uri = `mongodb://${host}:${port}`;

const client = new MongoClient(uri, {
    authSource: "admin",
    auth: {
        username,
        password,
    }
})

// esto es equivalente a lo anterior:
// const uri = `mongodb://${username}:${password}@${host}:${port}/${nombreDB}?authSource=admin`;
// const client = new MongoClient(uri)

await client.connect()

const dbCoderhouse = client.db("coderhouse")

const dbPersonas = dbCoderhouse.collection("personas");

const personas = await dbPersonas.find().toArray()

console.log(personas)

await client.close();
