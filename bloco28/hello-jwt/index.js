const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const login = require('./routes/loginRoutes');
const user = require('./routes/userRoutes');
const top = require('./routes/top-secret')

app.use('/login', login);
app.use('/user', user);
app.use('/top-secret', top);


const PORT_NUMBER = 3000;
const PORT = process.env.PORT || PORT_NUMBER;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
