//todo controle de das requisições ficam nesse arquivo
var Produtos = require('../models/produto')
var ProdutosM = require('../models/produtomysql')

exports.listar = (req, res) => { 
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Buscar todos sem parametros ou passar parametros para filtrar' 
    ProdutosM.getTodosFiltro(req, res);
}

exports.listarporid = (req, res) =>{
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Buscar por ID do contato'

    ProdutosM.getIdProduto(req, res);
}

exports.gravar = async (req, res) => {
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Cadastrar um contato'    

    try {
        await Produtos.create(req.body);
        res.status(201).send('Novo produto cadastrado com sucesso.')         
    } catch (error) {
        res.status(500).send('Erro ao tentar incluir.')   
    }     
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

exports.excluir = async (req, res) => {
    //#swagger.tags = ['Produtos']
    //#swagger.description = 'Excluir um contato informando a ID'      
    var codigo = req.params.codigo;

    try {
        var produto = await Produtos.findOne({codigo})   
        
        produto.log(produto)

        if(data === null) {
            res.status(404).send('produto '+codigo+' não encontrado!')  
            return
        }   
        
        await Produtos.findByIdAndDelete({codigo})

        res.send('produto '+codigo+' exlcuido com sucesso')
    } catch (error) {
        res.status(500).send('Erro ao tentar excluir.')    
    }
}