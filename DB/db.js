const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "ccapucarana.ddns.net",
  user: "root",
  password: "Naousar123@",
  database: "baseerrada"
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;