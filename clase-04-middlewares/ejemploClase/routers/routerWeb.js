const express = require('express');
const { controladorGetRoot,
    controladorGetBienvenida,
    controladorGetDespedida } = require("../controllers/controladorGetRoot.js");

const routerWeb = express.Router();

routerWeb.get('/', controladorGetRoot);
routerWeb.get('/bienvenida', controladorGetBienvenida);
routerWeb.get('/despedida', controladorGetDespedida);

exports.routerWeb = routerWeb;