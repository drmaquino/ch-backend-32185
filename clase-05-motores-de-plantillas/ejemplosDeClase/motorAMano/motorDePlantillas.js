/**
 * 
 * @param {String} plantilla 
 * @param {Object} contexto 
 */
function combinar(plantilla, contexto) {
    const splitted = plantilla.split('{{')
    if (splitted.length === 1) {
        return splitted[0]
    }
    const result = [splitted.shift()]
    for (const segment of splitted) {
        const parts = segment.split('}}')
        const [nombreDelCampo, resto] = parts
        result.push(contexto[nombreDelCampo], resto)
    }
    return result.join('')
}

function compilar(plantilla) {
    return function (contexto) {
        return combinar(plantilla, contexto)
    }
}

module.exports = {
    compilar
}