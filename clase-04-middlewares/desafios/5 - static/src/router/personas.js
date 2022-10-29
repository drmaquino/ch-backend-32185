const { Router } = require('express');

const routerPersonas = Router();

const personas = [];

routerPersonas.get('/', (req, res) => {
    res.json(personas);
});

routerPersonas.post('/', (req, res) => {
    personas.push(req.body);
    res.json(req.body);
});

exports.routerPersonas = routerPersonas;