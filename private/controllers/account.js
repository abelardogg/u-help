const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/', (req, res) => {
    let view = 'account';
    let model = {};

    res.render(view, model);
});

router.get('/login', (req, res) => {
    let view = 'login';
    let model = {};

    res.render(view, model);
});

router.post('/login', (req, res) => {
    let model = {};

    res.render(view, model);
});

router.post('/signin', (req, res) => {
    let model = {};

    res.render(view, model);
});

module.exports = router;