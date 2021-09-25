const router = require('express').Router();

const { Employee, Job, Department, Shift } = require('../../models');
const { Monday, Tuesday, Wednesday, Thursday, Friday } = require('../../models');

// GET /api/availability/departments
router.get('/departments', (req, res) => {
    // logic to search for employee availability by department
});

// GET /api/availability/job
router.get('/jobs', (req, res) => {
    // logic to search for availability by job
});

// GET /api/availabilitiy/departments/:id
router.get('/departments/:id', (req, res) => {
    // logic to search for employee availability by one department
});

// GET /api/availability/jobs/:id
router.get('/jobs/:id', (req, res) => {
    // logic to search for employee availability based on one job
})

// GET /api/availability/monday
router.get('/monday', (req, res) => {
    // logic to search for monday's availability
});

// GET /api/availability/tuesday
router.get('/tuesday', (req, res) => {
    // logic to search for tuesday's availability
});

// GET /api/availability/wednesday
router.get('/wednesday', (req, res) => {
    // logic to search for wednesday's availability
});

// GET /api/availability/thursday
router.get('/thursday', (req, res) => {
    // logic to search for thursday's availability
});

// GET /api/availability/friday
router.get('/friday', (req, res) => {
    // logic to search for friday's availability
});

// GET /api/availability/saturday
router.get('/saturday', (req, res) => {
    // logic to search for saturday's availability
});

// GET /api/availability/sunday
router.get('/sunday', (req, res) => {
    // logic to search for sunday's availability
});

// PUt /api/availability/monday
router.put('/monday', (req, res) => {
    // logic to update an employee monday availability
});

// PUT /api/availability/tuesday
router.put('/tuesday', (req, res) => {
    // logic to update an employee's tuesday availability
});

// PUT /api/availability/wednesday
router.put('/wednesday', (req, res) => {
    // logic to update an employee's wednesday availability
});

// PUT /api/availability/thursday
router.put('/thursday', (req, res) => {
    // logic to update an employee's thursday availability
});

// PUT /api/availability/friday
router.put('/friday', (req, res) => {
    // logic to update an employee's friday availability
});

router.put('/saturday', (req, res) => {
    // logic to update an employee's saturday availability
});

router.put('/sunday', (req, res) => {
    // logic to update an employee's sunday availability
});

router.post('/shifts', (req, res) => {
    // logic to create new shifts fr employees
});

module.exports = router;