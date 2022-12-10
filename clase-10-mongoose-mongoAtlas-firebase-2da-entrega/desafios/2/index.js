const mongoose = require('mongoose')

/* --------------------------------------------------------------------- */
/*  Definición del esquema de documento y del modelo                     */
/*  (para poder interactuar con la base de datos: leer, escribir, etc)   */
/* --------------------------------------------------------------------- */
const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  dni: { type: String, required: true, unique: true },
  curso: { type: String, required: true },
  nota: { type: Number, required: true },
})

const EstudiantesDAO = mongoose.model('estudiantes', estudianteSchema)

/* ------------------------------------------------------------------ */
/*               Conexión a la base de datos : colegio                */
/* ------------------------------------------------------------------ */
mongoose.connect('mongodb://localhost/colegio', {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => {
    console.log('Base de datos conectada')
    /* ------------------------------------------------------------------- */
    /*    Lectura de la base de datos: colegio, collection: estudiantes    */
    /* ------------------------------------------------------------------- */

    //----------------------------------------------------------------------------
    console.log('\n1) Estudiantes ordenados por orden alfabético según sus nombres')
    //----------------------------------------------------------------------------
    EstudiantesDAO.find({}).sort({ nombre: 1 })
      .then(estudiantes => {
        estudiantes.forEach(estudiante => {
          console.log(JSON.stringify(estudiante))
        })

        //----------------------------------------------------------------------------
        console.log('\n2) El estudiante más joven')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({}).sort({ edad: 1 }).limit(1)
      })
      .then(estudiantes => {
        estudiantes.forEach(estudiante => {
          console.log(JSON.stringify(estudiante))
        })

        //----------------------------------------------------------------------------
        console.log('\n3) Los estudiantes que pertenezcan al curso \'2A\'')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({ curso: '2A' })
      })
      .then(estudiantes => {
        estudiantes.forEach(estudiante => {
          console.log(JSON.stringify(estudiante))
        })

        //----------------------------------------------------------------------------
        console.log('\n4) El segundo estudiante más joven')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({}).sort({ edad: 1 }).skip(1).limit(1)
      })
      .then(estudiantes => {
        estudiantes.forEach(estudiante => {
          console.log(JSON.stringify(estudiante))
        })

        //----------------------------------------------------------------------------
        console.log('\n5) Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a)')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0 }).sort({ apellido: -1 })
      })
      .then(estudiantes => {
        estudiantes.forEach(estudiante => {
          console.log(JSON.stringify(estudiante))
        })

        //----------------------------------------------------------------------------
        console.log('\n6) El estudiante que sacó mejor nota')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({ nota: 10 })
      })
      .then(estudiantes => {
        estudiantes.forEach(estudiante => {
          console.log(JSON.stringify(estudiante))
        })
        //----------------------------------------------------------------------------
        console.log('\n7) El promedio de notas del total de alumnos')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({})
      })
      .then(estudiantes => {
        let sumNotas = 0
        estudiantes.forEach(estudiante => {
          //console.log(JSON.stringify(estudiante))
          sumNotas += estudiante.nota
        })
        console.log(`Promedio: ${(sumNotas / estudiantes.length).toFixed(2)}`)

        //----------------------------------------------------------------------------
        console.log('\n8) El promedio de notas del curso \'1A\'')
        //----------------------------------------------------------------------------
        return EstudiantesDAO.find({ curso: '1A' })
      })
      .then(estudiantes => {
        let sumNotas = 0
        estudiantes.forEach(estudiante => {
          //console.log(JSON.stringify(estudiante))
          sumNotas += estudiante.nota
        })
        console.log(`Promedio: ${(sumNotas / estudiantes.length).toFixed(2)}`)
      })
      .catch(err => { throw new Error(`Error en lectura ${err}`) })
      .finally(() => {
        mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
      })
  })
  .catch(err => { throw new Error(`Error de conexión a la base de datos ${err}`) })
