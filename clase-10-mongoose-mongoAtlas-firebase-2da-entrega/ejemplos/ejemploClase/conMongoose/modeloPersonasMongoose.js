import mongoose from 'mongoose';

await mongoose.connect('mongodb://root:mongopassword@localhost/coderhouse?authSource=admin');
const esquemaPersonas = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, min: 0, required: true }
});

esquemaPersonas.methods.enviarMailSegunEdad = () => {
};

export const modeloPersonas = mongoose.model('personas', esquemaPersonas);
