const router = require('express').Router();
const loadSections = require('../../seeds/loadData');
const enums = require('../../utils/enums');

router.get('/', (req, res) => {
    let sections = loadSections.createSections();
    
    res.status(200).json(sections);
});

router.get('/section-types', (req, res) => {
    let sectionTypes = enums.SectionTypes;
    
    res.status(200).json(sectionTypes);
});

module.exports = router;