module.exports = (io) => io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
        console.log(`Mensagem ${message}`);
        io.emit('serverMessage', message);
      });
});
//io.emit : Enviar uma mensagem para todos os clientes com uma conexão socket aberta. 
// (Só é possível usar do lado do servidor)