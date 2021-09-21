const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const jobRoutes = require('./job-routes');

router.use('/employees', employeeRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;