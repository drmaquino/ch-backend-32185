function escribirYLoguear(texto, callbackParaLoguear) {
  // simulamos que escribimos en un archivo!
  console.log(texto)
  // al finalizar, ejecutamos el callback
  callbackParaLoguear('archivo escrito con éxito')
}

escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
  const fecha = new Date().toLocaleDateString()
  console.log(`${fecha}: ${mensajeParaLoguear}`)
})
