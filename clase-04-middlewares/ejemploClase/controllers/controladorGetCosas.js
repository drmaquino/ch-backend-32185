const { randomUUID } = require('crypto');

const cosas = [];

function enRango(num, min = 0, max = 10000) {
    return num >= min && num <= max;
}
function controladorGetCosas({ query }, res) {
    let resultado;
    if (query.min || query.max) {
        resultado = cosas.filter(({ edad }) => enRango(edad, query.min, query.max));
    } else {
        resultado = cosas;
    }

    res.json(resultado);
}
function controladorPostCosas(req, res) {
    console.log(req);
    const cosaNueva = req.body;
    cosaNueva.id = randomUUID();
    cosas.push(cosaNueva);
    res.status(201);
    res.json(cosaNueva);
}
function controladorGetCosasSegunId({ params: { id } }, res) {
    const buscado = cosas.find(c => c.id === id);
    if (!buscado) {
        res.status(404);
        res.json({ mensaje: `no se encontró cosa con ese id (${id})` });
    } else {
        res.json(buscado);
    }
}
function controladorPutCosasSegunId({ body, params: { id } }, res) {
    const indiceBuscado = cosas.findIndex(c => c.id === id);
    if (indiceBuscado === -1) {
        res.status(404);
        res.json({ mensaje: `no se encontró cosa con ese id (${id})` });
    } else {
        cosas[indiceBuscado] = body;
        res.json(body);
    }
}
function controladorPatchCosasSegunId({ body, params: { id } }, res) {
    const indiceBuscado = cosas.findIndex(c => c.id === id);
    if (indiceBuscado === -1) {
        res.status(404);
        res.json({ mensaje: `no se encontró cosa con ese id (${id})` });
    } else {
        cosas[indiceBuscado] = { ...cosas[indiceBuscado], ...body };
        res.json(cosas[indiceBuscado]);
    }
}
function controladorDeleteCosasSegunId({ params: { id } }, res) {
    const indiceBuscado = cosas.findIndex(c => c.id === id);
    if (indiceBuscado === -1) {
        res.status(404);
        res.json({ mensaje: `no se encontró cosa con ese id (${id})` });
    } else {
        const borrados = cosas.splice(indiceBuscado, 1);
        // res.sendStatus(204)
        res.json(borrados[0]);
    }
}

exports.controladorGetCosas = controladorGetCosas;
exports.controladorPostCosas = controladorPostCosas;
exports.controladorGetCosasSegunId = controladorGetCosasSegunId;
exports.controladorPutCosasSegunId = controladorPutCosasSegunId;
exports.controladorPatchCosasSegunId = controladorPatchCosasSegunId;
exports.controladorDeleteCosasSegunId = controladorDeleteCosasSegunId;
