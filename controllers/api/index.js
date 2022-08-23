const router = require('express').Router();
const sectionRoutes = require('./section-routes');
const licenseRoutes = require('./license-routes');

router.use('/section', sectionRoutes);
router.use('/license', licenseRoutes);

module.exports = router;