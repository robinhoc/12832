//todo controle de das requisições ficam nesse arquivo

exports.listar = (req, res) => { 
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Buscar todos sem parametros ou passar parametros para filtrar'

    var Url = '';
    var FiltroId = '';

    if(req.query.idcontato != undefined){
        FiltroId = 'id do produto: '+req.query.idcontato + ', ' 
    }

    if(req.query.nome != undefined){
        FiltroId = FiltroId + 'nome: '+req.query.nome 
    }    

    console.log(FiltroId);

    if(FiltroId != ''){
        Url = 'Buscando produto pelos filtros: '+ FiltroId 
    }else{
        Url =  'Listando todos os produtos'
    }
 
    res.send(Url)
}

exports.listarporid = (req, res) =>{
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Buscar por ID do contato'

    var FiltroId = req.params.idcontato;

    res.send('Buscando produto pelo ID: ' + FiltroId)
}

exports.gravar = (req, res) => {
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Cadastrar um contato'    
    
    let dadoscontato = {
        codigo: req.body.codigo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    }
    console.log(dadoscontato)

    res.status(201).send('Novo produto criado com sucesso.')    
}

exports.atualizar = (req, res) =>{
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Atualizar um contato'       
    let dadoscontato = {
        codigo: req.body.codigo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    }
    console.log(dadoscontato)

    res.status(201).send('produto '+ req.body.codigo +' atualizado com sucesso.')
}

exports.excluir = (req, res) => {
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Excluir um contato informando a ID'      
    var codDelete = req.params.codigo;

    res.send('produto '+codDelete+' exlcuido com sucesso')       
}