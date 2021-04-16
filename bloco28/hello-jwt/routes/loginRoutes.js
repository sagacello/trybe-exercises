const express = require('express');
const loginController = require('../controller/loginController');

const app = express.Router();
app.post('/',loginController);

module.exports = app;
