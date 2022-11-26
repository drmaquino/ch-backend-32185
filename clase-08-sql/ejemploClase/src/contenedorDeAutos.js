import { ContenedorMemoria } from './ContenedorMemoria.js';
import { ContenedorMysql } from './ContenedorMysql.js';
import { clienteSql } from './clienteSql.js';

// export const contenedorDeCosas = new ContenedorMemoria();
export const contenedorDeAutos = new ContenedorMysql(clienteSql, 'autos');
