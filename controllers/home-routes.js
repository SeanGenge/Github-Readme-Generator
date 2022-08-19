const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('main', { layout: 'index' });
});

module.exports = routes;