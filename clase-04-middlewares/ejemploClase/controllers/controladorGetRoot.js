function controladorGetRoot(req, res) {
    res.send('todo bien');
}
function controladorGetBienvenida(req, res) {
    res.json({ mensaje: 'hola' });
}
function controladorGetDespedida(req, res) {
    res.send('chau');
}

exports.controladorGetRoot = controladorGetRoot;
exports.controladorGetBienvenida = controladorGetBienvenida;
exports.controladorGetDespedida = controladorGetDespedida;
