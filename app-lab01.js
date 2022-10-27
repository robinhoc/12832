const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Pagina inicial de contatos.')
})

app.get('/contatos', (req, res) => {
    var Url = '';
    var FiltroId = '';

    if(req.query.idcontato != undefined){
        FiltroId = 'id do contato: '+req.query.idcontato + ', ' 
    }

    if(req.query.nome != undefined){
        FiltroId = FiltroId + 'nome: '+req.query.nome 
    }    

    console.log(FiltroId);

    if(FiltroId != ''){
        Url = 'Buscando contato pelos filtros: '+ FiltroId 
    }else{
        Url =  'Listando todos os contatos'
    }
 
    res.send(Url)
})

app.get('/contatos/:idcontato', (req, res) => {
    var FiltroId = req.params.idcontato;

    res.send('Buscando contato pelo ID: ' + FiltroId)
})

app.post('/contatos', (req, res) => {
    
    let dadoscontato = {
        codigo: req.body.codigo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    }
    console.log(dadoscontato)

    res.status(201).send('Novo contato criado com sucesso.')
})

app.put('/contatos', (req, res) => {
    let dadoscontato = {
        codigo: req.body.codigo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    }
    console.log(dadoscontato)

    res.status(201).send('contato '+ req.body.codigo +' atualizado com sucesso.')
})

app.delete('/contatos/:codigo', (req, res) => {
    var codDelete = req.params.codigo;

    res.send('Contato '+codDelete+' exlcuido com sucesso')    
})

app.listen(3000, () => {
    console.log('Servidor On-Line')
})