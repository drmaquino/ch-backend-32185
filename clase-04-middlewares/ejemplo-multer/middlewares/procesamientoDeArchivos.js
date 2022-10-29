const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const nombreFinal = `${Date.now()}-foto-${file.originalname}`
        cb(null, nombreFinal)
    }
})

const upload = multer({ storage })

const middlewareDeUnArchivo = upload.single('myFile')
const middlewareDeVariosArchivos = upload.array('myFiles')

module.exports = {
    extraerUnArchivo,
    extraerVariosArchivos
}