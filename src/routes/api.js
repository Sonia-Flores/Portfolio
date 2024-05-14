const router = require('express').Router();

router.use('/projects', require('./api/projects'));
router.use('/experiences', require('./api/experiences'));

module.exports = router;