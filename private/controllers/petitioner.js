const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/medicine', (req, res) => {
    let view = 'medicine';
    let model = {};

    res.render(view, model);
});

router.get('/blood', (req, res) => {
    let view = 'blood';
    let model = {};

    res.render(view, model);
});

module.exports = router;