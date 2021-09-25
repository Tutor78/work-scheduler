const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const availabilityRoutes = require('./availability-routes')
const updateRoutes = require('./update-routes');

router.use('/employees', employeeRoutes);
router.use('/availability', availabilityRoutes);
router.use('/update', updateRoutes);

module.exports = router;