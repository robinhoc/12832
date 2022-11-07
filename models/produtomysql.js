const conn = require('../DB/db');

exports.getTodosFiltro = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    var Sql = '';
    var FiltroId = '';

    var mostrarproddesativado = req.query.desativados; 

    if(mostrarproddesativado == 'N'){
        FiltroId = 'where preco > 0'    
    }else{
        FiltroId = 'where preco >= 0'  
    }   

    if(req.query.id != undefined){
        FiltroId = FiltroId + ' and codigo = '+req.query.id 
    }

    if(req.query.nome != undefined){
        FiltroId = FiltroId + ' and descricao ='+req.query.nome 
    }   

    Sql = 'select funnomecategoria(COD_CATEGORIA) as nomecategoria, '+
    '          CODIGO , COD_CATEGORIA ,DESCRICAO , PRECO , UN '+
    '  from tbprodutos '+FiltroId+'                       '+
    '  order by COD_CATEGORIA , DESCRICAO ';

    conn.query(Sql, function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json(data);
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