import mongoose from 'mongoose'

/* --------------------------------------------------------------------- */
/*  Definición del esquema de documento y del modelo                     */
/*  (para poder interactuar con la base de datos: leer, escribir, etc)   */
/* --------------------------------------------------------------------- */
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: {
        type: String, unique: true
    }
})
const UsuariosDAO = mongoose.model('usuarios', usuarioSchema)

/* ------------------------------------------------------------------ */
/*               Conexión a la base de datos : colegio                */
/* ------------------------------------------------------------------ */

try {
    // const URL = 'mongodb+srv://daniel:daniel123@misdatos.fs00f.mongodb.net/ecommerce?retryWrites=true&w=majority'
    const URL = 'mongodb://localhost/ecommerce'
    await mongoose.connect(URL, {
        serverSelectionTimeoutMS: 5000,
    })
    console.log('Base de datos conectada')

    try {
        /* ------------------------------------------------------------------- */
        /*   Escritura de la base de datos: ecommerce, collection: usuarios    */
        /* ------------------------------------------------------------------- */
        await UsuariosDAO.create({ nombre: 'Federico', apellido: 'Perez', dni: '320118321' })
        console.log('usuario agregado!')

        //----------------------------------------------------------------------------
        /* listar usuarios representándolos en la consola */
        //----------------------------------------------------------------------------
        const usuarios = await UsuariosDAO.find({})
        usuarios.forEach(usuario => {
            console.log(JSON.stringify(usuario))
        })
    } catch (error) {
        console.log(`Error en operación de base de datos ${error}`)
    } finally {
        await mongoose.disconnect()
    }
} catch (error) {
    console.log(`Error de conexión a la base de datos ${error}`)
}
