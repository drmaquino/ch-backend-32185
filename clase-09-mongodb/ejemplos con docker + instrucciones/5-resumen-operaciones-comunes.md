# CRUD

## Create

db.coleccion.insertOne({nombre: 'marian'})
db.coleccion.insertMany([{nombre: 'pepe'},{color: 'rojo'},{a:1, b:2, c:3}])

## Read

db.coleccion.findOne({})
db.coleccion.find({})

## Update

db.coleccion.replaceOne({}, {})
db.coleccion.replaceMany({}, {})

db.coleccion.updateOne({}, {})
db.coleccion.updateMany({}, {})

## Delete
db.coleccion.deleteOne({})
db.coleccion.deleteMany({})
