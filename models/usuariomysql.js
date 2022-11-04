const conn = require('../DB/db');
var jwt = require('jsonwebtoken')

exports.validarUsuario= (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    var Sql = '';

    var usuario = req.body.usuario; 
    var senha = req.body.senha;

    Sql = 'select * from tbusuarios '+
        'where login  = "'+usuario+'" '+
        'and senha  = "'+senha+'" '; 

    conn.query(Sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
        console.log(data.length) 

        if (data.length > 0) {
            var token = jwt.sign({ id: data.email }, '12832', { expiresIn: '1m' })
            res.status(200).send(token)
        }
        else {
            res.status(200).send('Usuário e ou senha inválido!!!')
        }
    });
};

exports.getIdProduto = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    var Sql = '';
    var FiltroId = req.params.id; 

    if(FiltroId != ''){
        Sql = 'select funnomecategoria(COD_CATEGORIA) as nomecategoria, '+
                '          CODIGO , COD_CATEGORIA ,DESCRICAO , PRECO , UN '+
                '  from tbprodutos where codigo = '+FiltroId+'                       '+
                '  order by COD_CATEGORIA , DESCRICAO ';

        conn.query(Sql, function (err, data, fields) {
            if(err) return next(new AppError(err))
            res.status(200).json(data);
            });        
    }else{
        res.send('Id do produto deve ser informado.')
    }
};   