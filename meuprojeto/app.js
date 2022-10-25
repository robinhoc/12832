const mysql = require("mysql2");
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Raiz')
})

app.get('/produtos/:id?', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    let filter = '';
    if(req.params.id > 0){
      filter = ' WHERE codigo = ' + parseInt(req.params.id);  
    } 

    console.log(filter);

    var SqlConsulta = ' select codigo, descricao, valfinal '+ 
                      ' from produtos '+ filter +
                      ' order by descricao ';

    execSQLQuery(SqlConsulta, res);
    /*res.json([{id: 1 , 
              descricao: 'produto 1' ,
              valor: 1.5 ,
              situacao: 'A' 
            },
            {id: 2 , 
                descricao: 'produto 2' ,
                valor: 1.7 ,
                situacao: 'A' 
              }]
            )
  */       
  })

app.post('/produtos', (req, res) => {
    res.send('Cadastrando novo produto')
})  

app.put('/produtos', (req, res) => {
    res.send('Alterando produto')
}) 

app.delete('/produtos', (req, res) => {
    res.send('Excluindo produto')
}) 

app.listen(3000, () => {
    console.log('Servidor no ar')
})

//funcitons da base
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host: "sistemasserver.ddns.me",
        user: "bema",
        password: "020491bmf",
        database: "food_web"
    });
  
    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
    });
  }