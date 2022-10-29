const { Router } = require('express')

const { extraerUnArchivo, extraerVariosArchivos } = require('../middlewares/procesamientoDeArchivos.js')
const {
    uploadFileController,
    uploadFilesController
} = require('../controladores/uploadFiles.js')

const router = new Router()

router.post('/uploadfile', extraerUnArchivo, uploadFileController)
router.post('/uploadfiles', extraerVariosArchivos, uploadFilesController)

module.exports = router