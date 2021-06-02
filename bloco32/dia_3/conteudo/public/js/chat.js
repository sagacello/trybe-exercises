const socket = window.io();

const form = document.querySelector('form'); // aqui eu pego o form do html
const inputMessage = document.querySelector('#messageInput'); // aqui eu pego o messageInput do html

form.addEventListener('submit', (e) => {
  e.preventDefault();// para nao atualizar a pagina
  socket.emit('clientMessage', inputMessage.value); // envia mensagem entre cliente servidor
  inputMessage.value = '';
  return false; // para parar !
});
// pego do front envio para o servidor e o servidor envia para todos

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
  // quando o servidor enviar o evento é escutado e 
  // essa funçao sera chamada
};

socket.on('serverMessage', (message) => createMessage(message));
