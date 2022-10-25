const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Opa')
})

app.get('/categorias', (req, res) => {
    res.send('Listar categorias')
})

app.post('/categorias', (req, res) => {
    res.status(201).send('Criar categoria')
})

app.put('/categorias', (req, res) => {
    res.send('Alterar categoria')
})

app.delete('/categorias', (req, res) => {
    res.send('Excluir categoria')
})


app.listen(3000, () => {
    console.log('Servidor web ok!')
})