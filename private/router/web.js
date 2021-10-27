const express = require('express');
const app = express();

const home = require('../controllers/home.js');
const petitioner = require('../controllers/petitioner.js');
const about = require('../controllers/about.js');
const account = require('../controllers/account.js');
const disclaimer = require('../controllers/disclaimer.js');

app
.use('/', home)
.use('/petitioner', petitioner)
.use('/about', about)
.use('/account', account)
.use('/disclaimer', disclaimer)


module.exports = app;