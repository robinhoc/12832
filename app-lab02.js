const express = require('express') // cria o servidor web para receber requisições
const swaggerUi = require('swagger-ui-express') // para documentação visual
const mongoose = require('mongoose') //conexao ao banco de dados
const mysql = require("mysql2") // conexao ao mysql

var routeProduto = require('./routes/produto') // rota onde esta toda info dos produtos

const app = express()

//inicio dados para conexao ao banco
var url = 'mongodb+srv://app:123@cluster0.i2yjs8v.mongodb.net/?retryWrites=true&w=majority'
//var url = 'mongodb+srv://app:123@cluster0.tubrkee.mongodb.net/?retryWrites=true&w=majority'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(url, options);

mongoose.connection.on('connected', () => {
    console.log('Conectado ao mongodb!!!')
})
//fim dados para conexao ao banco

//inicio para conexao com mysql
const connectionmysql = mysql.createConnection({
    host: "sistemasserver.ddns.me",
    user: "bema",
    password: "020491bmf",
    database: "catdig_acougue"
});

connectionmysql.connect(function(err) {
    if (err) throw err;
    console.log("Conectao ao MySql!");
  });
//fim para conexao mysql

const swaggerDocument = require('./swagger_output.json'); // local onde vai saltar a documentação

app.use(express.static('public')) // libera essa pasta para acesso a arquivos
app.use(express.json()); //para converter a recepcao do Json

app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) // gera a documentação

app.use('/produtos', routeProduto); // adiciona a rota dos produtos http://localhost:3000/produto

app.get('/', (req, res) => { // cai na raiz do servidor
    // #swagger.tags = ['Root']   
    res.send('Opa')
})

app.listen(3000, () => { // inciia o servidor web
    console.log('Servidor web ok!')
})