import { port } from './config.js';
import { app } from './server.js';

app.listen(port, () => {
    console.log('conectado!')
})