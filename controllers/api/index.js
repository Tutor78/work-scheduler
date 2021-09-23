const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const jobRoutes = require('./job-routes');
const departmentRoutes = require('./department-routes');

router.use('/employees', employeeRoutes);
router.use('/jobs', jobRoutes);
router.use('/departments', departmentRoutes);

module.exports = router;