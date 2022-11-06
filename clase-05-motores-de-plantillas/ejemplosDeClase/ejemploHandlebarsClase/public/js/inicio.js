// const templateText = '<h1>{{nombre}}!</h1>';

async function main() {
    const response = await fetch('templates/inicio.handlebars')
    const templateText = await response.text()
    const templateFn = Handlebars.compile(templateText); // compila la plantilla
    const html = templateFn({ nombre: 'coder' }); // genera el html
    document.getElementById('espacioParaContenido').innerHTML = html; // inyecta el resultado en la vista
}

main()  