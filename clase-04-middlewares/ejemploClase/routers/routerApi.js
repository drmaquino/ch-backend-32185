const express = require('express');
const { controladorGetCosas,
    controladorGetCosasSegunId,
    controladorPostCosas,
    controladorPutCosasSegunId,
    controladorPatchCosasSegunId,
    controladorDeleteCosasSegunId } = require("../controllers/controladorGetCosas");

const routerApi = express.Router();

routerApi.get('/', controladorGetCosas);
routerApi.get('/:id', controladorGetCosasSegunId);
routerApi.post('/', controladorPostCosas);
routerApi.put('/:id', controladorPutCosasSegunId);
routerApi.patch('/:id', controladorPatchCosasSegunId);
routerApi.delete('/:id', controladorDeleteCosasSegunId);

exports.routerApi = routerApi;
