const socket = io();

const formAgregarPersona = document.getElementById('formAgregarPersona')
formAgregarPersona.addEventListener('submit', e => {
    // prevengo que el formulario recargue la pagina al hacer submit
    e.preventDefault()

    // armo la persona extrayendo los datos de los campos del formulario

    const persona = {
        nombre: formAgregarPersona[0].value, // document.getElementById('txtNombre').value
        apellido: formAgregarPersona[1].value, // document.getElementById('txtApellido').value
    }

    // envio la persona al servidor via socket
    socket.emit('update', persona);

    // limpio el contenido de los campos del formulario
    formAgregarPersona.reset()
})

// agrego manejador de eventos de tipo 'personas'
socket.on('personas', manejarEventoPersonas);

async function manejarEventoPersonas(personas) {
    // console.log(personas)

    // busco la plantilla del servidor
    const recursoRemoto = await fetch('plantillas/tabla-personas.hbs')

    //extraigo el texto de la respuesta del servidor
    const textoPlantilla = await recursoRemoto.text()

    //armo el template con handlebars
    const functionTemplate = Handlebars.compile(textoPlantilla)

    // relleno la plantilla con las personas recibidas
    const html = functionTemplate({ personas })

    // reemplazo el contenido del navegador con los nuevos datos
    document.getElementById('personas').innerHTML = html
}
