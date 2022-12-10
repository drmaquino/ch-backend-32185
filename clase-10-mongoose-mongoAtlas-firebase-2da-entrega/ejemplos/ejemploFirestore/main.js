import admin from "firebase-admin"
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync("./db/coderhouse-27fef-firebase-adminsdk-akmqd-d849519215.json", 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://carbon-nucleus-264418.firebaseio.com"
});

const asObj = doc => ({ id: doc.id, ...doc.data() })

console.log('Base Firebase conectada!')

const db = admin.firestore();
const dbNombres = db.collection('nombres')

const guardado = await dbNombres.add({ nombre: 'pepe' });
console.log(guardado.id)

const doc = await dbNombres.doc(guardado.id).get();
console.dir(asObj(doc))

const result = []
const snapshot = await dbNombres.get();
snapshot.forEach(doc => {
    result.push(asObj(doc))
})
console.dir(result)

await dbNombres.doc(guardado.id).set({ nombre: 'papa' });
console.dir(asObj(await dbNombres.doc(guardado.id).get()))

await dbNombres.doc(guardado.id).delete();

//------------------------------------------------

// version fea e ineficiente pero entendible para empezar
try {
    const dbColores = db.collection('colores')
    const ids = []
    const snapshot = await dbColores.get();
    snapshot.forEach(doc => {
        ids.push(doc.id)
    })
    const promesas = ids.map(id => dbColores.doc(id).delete())
    const resultados = await Promise.allSettled(promesas)
    const errores = resultados.filter(r => r.status == 'rejected')
    if (errores.length > 0) {
        throw new Error('no se borró todo. volver a intentarlo')
    }
    // const ref = firestore.collection(path)
    // ref.onSnapshot((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //         ref.doc(doc.id).delete()
    //     })
    // })
} catch (error) {
    throw new Error(`Error al borrar: ${error}`)
}
