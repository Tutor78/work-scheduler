const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const availabilityRoutes = require('./availability-routes');

router.use('/employees', employeeRoutes);
router.use('/availability', availabilityRoutes);

module.exports = router;