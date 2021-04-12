const express = require('express');

const cepController = require('./controllers/cepController')

const app = express();

app.use(express.json());

app.get('/lookup', cepController.findById);
app.get('/statistic', cepController.statisticCEP);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});