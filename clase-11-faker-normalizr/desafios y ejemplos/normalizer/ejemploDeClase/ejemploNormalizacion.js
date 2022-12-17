const persona = {
    dni: '123',
    nombre: 'marian',
    direccion: {
        calle: 'abc',
        nro: 123,
    }
}

//================================================================

// opcion 1
const personaAplanada = {
    dni: '123',
    nombre: 'marian',
    direccion_calle: 'abc',
    direccion_nro: 123,
}

// tabla personas:
// columnas: dni | nombre | direccion.calle | direccion.nro

//================================================================

// opcion 2
const direccionFrag = {
    calle: 'abc',
    nro: 123,
}

const personaFrag = {
    dni: '123',
    nombre: 'marian',
    direccionFrag
}

// tabla personas:
// dni | nombre | idDireccion

// tabla direcciones:
// idDireccion | calle | nro

//==================================================================

// opcion normalizr

const personaPNorm = {
    dni: '123',
    nombre: 'marian',
    direccion: {
        idDireccion: '1',
        calle: 'abc',
        nro: 123,
    }
}

// tabla personas:
// dni   | nombre   | direccion
// '123' | 'marian' | '1'

// tabla direcciones:
// idDireccion | calle | nro
//  '1'        | 'abc' | 123
