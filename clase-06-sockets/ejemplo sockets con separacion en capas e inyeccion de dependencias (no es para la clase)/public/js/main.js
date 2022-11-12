const socket = io();

const formAgregarProducto = document.getElementById('formAgregarProducto')
formAgregarProducto.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: formAgregarProducto[0].value,
        price: formAgregarProducto[1].value,
        thumbnail: formAgregarProducto[2].value
    }
    socket.emit('nuevoProducto', producto);
    formAgregarProducto.reset()
})

socket.on('productos', datosProducto => {
    alert(JSON.stringify(datosProducto))
})

