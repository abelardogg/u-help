const express = require('express');
const app = express();

const home = require('../controllers/home.js');

app
.use('/', home)

module.exports = app;