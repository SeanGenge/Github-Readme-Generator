const router = require('express').Router();
const enums = require('../../utils/enums');
const licenses = require('../../seeds/license.json');

router.get('/', (req, res) => {
    
    res.status(200).json(licenses);
});

module.exports = router;