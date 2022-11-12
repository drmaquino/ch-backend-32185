const datos = []

const dao = {
    guardar: async (dato) => {
        datos.push(dato)
        console.log(dato)
    }
}

export function getDao() {
    return dao
}