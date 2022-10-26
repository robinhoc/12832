const express = require('express')
const app = express()

app.use(express.static('public')); // habilitar arquivos da pasta para funcionar pelo servidor
app.use(express.json()) // pegar o valor do body

app.get('/', (req, res) => {
    res.send('Opa')
})

app.get('/produtos', (req, res) => {
    console.log(req.query.nome +'-'+req.query.sobrenome)
    res.send('Listar produtos')
})

app.get('/produtos/:codigo', (req, res) => {
    var codFiltro = req.params.codigo;

    res.send('Buscar produtos '+codFiltro)
})

app.post('/produtos', (req, res) => {
    
    let produto = {
        codigo: req.body.codigo,
        descricao: req.body.descricao
    }
    console.log(produto)

    res.status(201).send('Criar categoria')
})

app.put('/produtos', (req, res) => {
    let produto = {
        codigo: req.body.codigo,
        descricao: req.body.descricao
    }    
    console.log(produto)
    res.send('Alterar categoria')
})

app.delete('/produtos/:codigo', (req, res) => {
    var codDelete = req.params.codigo;

    res.send('Excluir produto '+codDelete)    
})


app.listen(3000, () => {
    console.log('Servidor web ok!')
})