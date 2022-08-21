const router = require('express').Router();
const sectionRoutes = require('./section-routes');

router.use('/section', sectionRoutes);

module.exports = router;