const express = require('express');
const userController = require('../controller/userController');
const middlewareAuth = require('../middlewares/middlewareAuth')
const app = express.Router();
app.get('/me',middlewareAuth, userController);

module.exports = app;
