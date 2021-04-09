const mysql = require('mysql2/promise');

const connection = mysql.createPool({ // vai abrir a conexao e deixar ela sempre aberta 
  host: 'localhost',                  // a aplicaçao se torna mais rapida
  user: 'root',
  password: 'marcelo1988nejineji',
  database: 'model_example'});

module.exports = connection;