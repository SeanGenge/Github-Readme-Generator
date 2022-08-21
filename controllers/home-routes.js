const router = require('express').Router();
const loadSections = require('../seeds/loadSectionData');
const enums = require('../utils/enums');

router.get('/', async (req, res) => {
    try {
        let sections = loadSections.createSections();
        let SectionTypes = enums.SectionTypes;
        
        res.render('home', {
            sections: sections,
            SectionTypes: SectionTypes
        });
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;