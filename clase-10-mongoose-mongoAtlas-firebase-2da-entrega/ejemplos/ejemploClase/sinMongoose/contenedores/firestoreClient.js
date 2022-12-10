import admin from "firebase-admin";
import fs from 'fs';

const serviceAccount = JSON.parse(await fs.promises.readFile('./config/coderhouse37620-firebase-adminsdk-c6fch-582848dcc2.json', 'utf-8'));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const firestoreDatabase = admin.firestore();
