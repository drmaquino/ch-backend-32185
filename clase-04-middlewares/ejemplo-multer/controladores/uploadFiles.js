const uploadFileController = (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
}

const uploadFilesController = (req, res, next) => {
    const files = req.files
    if (!files || files.length == 0) {
        const error = new Error('Please upload files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
}

module.exports = {
    uploadFileController,
    uploadFilesController
}