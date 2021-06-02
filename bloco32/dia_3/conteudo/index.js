const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors')
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});
app.use(cors)
// Agora só precisamos fazer nosso back-end prover 
// acesso aos arquivos dentro do diretório public 
// adicionando a seguinte linha de código.
app.use(express.static(__dirname + '/public'));

require('./sockets/ping')(io);
require('./sockets/chat')(io);
require('./sockets/rooms')(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
