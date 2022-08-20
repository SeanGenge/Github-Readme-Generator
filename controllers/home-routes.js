const routes = require('express').Router();
const sections = require('../public/js/index');

routes.get('/', async (req, res) => {
    res.render('home', {
        sections: sections.displayedSections,
        SectionTypes: sections.SectionTypes
    });
});

module.exports = routes;