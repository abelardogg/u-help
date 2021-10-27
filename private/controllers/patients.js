const express = require('express');
var router = express.Router();
const bloodPatientsDao = require('../dao/bloodPatients');

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
    const getAllBloodPatients = bloodPatientsDao().readAll();
    let model = {patients: getAllBloodPatients};

    res.render(view, model);
});

module.exports = router;