var jwt = require('jsonwebtoken')


exports.request = (req, res, next) => {
    console.log('Request =>', req.method, req.url, req.body)
    //res.status(403).send('Não permitido!!!!')
    next()
}

exports.autenticacao = (req, res, next) => {
    var token = req.headers.auth;

    jwt.verify(token, '12832', (err, decoded) => {

        if (err) {
            res.send('Token inválido!!!', err)
        }
        else {
            console.log(decoded)
            next()
        }

    });
}