const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "sistemasserver.ddns.me",
  user: "bema",
  password: "020491bmf",
  database: "catdig_acougue"  
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con