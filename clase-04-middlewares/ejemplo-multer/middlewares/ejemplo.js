const miMiddleware = function (req, res, next) {
    // hago algo con req
    // puedo:
    //    contestar al cliente (res.send() / res.json() )
    //    continuar con el siguiente middleware (next() )
    next()
}

module.exports = { miMiddleware }