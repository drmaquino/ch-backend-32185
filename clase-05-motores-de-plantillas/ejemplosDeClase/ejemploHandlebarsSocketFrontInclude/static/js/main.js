const socket = io()

const templates = {}

const urls = {
    datos: 'static/templates/datos.handlebars',
    nav: 'static/templates/partials/nav.handlebars'
}

function buscarPlantilla(url) {
    return fetch(url).then(res => res.text())
}

async function cargarPartial(partialName, partialUrl) {
    const plantilla = await buscarPlantilla(partialUrl)
    const template = Handlebars.compile(plantilla)
    Handlebars.partials[partialName] = template
}

async function obtenerTemplate(nombreTemplate) {
    if (!templates[nombreTemplate]) {
        const plantilla = await buscarPlantilla(urls[nombreTemplate])
        templates[nombreTemplate] = Handlebars.compile(plantilla);
    }
    return templates[nombreTemplate]
}

async function actualizarVistaDatos(nombres) {
    // const response = await fetch('/api/datos')
    // const nombres = await response.json()
    const contexto = { nombres, hayNombres: nombres.length > 0, datoX: 123 }
    const template = await obtenerTemplate('datos')
    const html = template(contexto)
    document.getElementById('main__body').innerHTML = html;
}

socket.on('nombres', nombres => {
    actualizarVistaDatos(nombres)
})

cargarPartial('nav', urls.nav)

// actualizarVistaDatos()