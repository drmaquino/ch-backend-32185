const uploadFileController = (req, res) => {
    const file = req.file
    if (!file) {
        res.status(400)
        return res.send('Please upload a file')
    }
    res.send(file)
}

const uploadFilesController = (req, res) => {
    const files = req.files
    if (!files || files.length == 0) {
        res.status(400)
        return res.send('Please upload files')
    }
    res.send(files)
}

module.exports = {
    uploadFileController,
    uploadFilesController
}