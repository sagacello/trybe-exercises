const express = require('express');
const topController = require('../controller/topController');
const middlewareTop = require('../middlewares/middlewareTop')
const middlewareAuth = require('../middlewares/middlewareAuth')

const app = express.Router();
app.get('/',middlewareAuth, middlewareTop, topController);

module.exports = app;
