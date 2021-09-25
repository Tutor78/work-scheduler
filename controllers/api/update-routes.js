const router = require('express').Router();

const { Employee, Job, Shift, Department } = require('../../models');
const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = require('../../models');

// PUT /api/update/departments
router.put('/departments', (req, res) => {
    // logic to update departments
});

// PUT /api/update/jobs
router.put('/jobs', (req, res) => {
    // logic to update jobs
});

// POST /api/update/departments
router.post('/departments', (req, res) => {
    // logic to create new departments
});

router.post('/jobs', (req, res) => {
    // logic to create new jobs
});

module.exports = router;