const routes = require('express').Router();
const home = require('./home-routes.js');

routes.get('/', home);

module.exports = routes;