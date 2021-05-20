const express = require('express');
const app = express();

function notFoundPage(req, res, next){
        let view = 'error/404';
        let model = {};

        res.status(404);
        res.render(view, model);
}

function serverErrorPage(req, res, next){
    let view = 'error/500';
    let model = {};

    res.status(500);
    res.render(view, model);

}

module.exports = {
    notFoundPage: notFoundPage,
    serverErrorPage: serverErrorPage
};