const router = require('express').Router();

const { Employee, Job, Shift, Department } = require('../../models');
const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = require('../../models');

// PUT /api/update/departments
router.put('/departments/:id', (req, res) => {
    // logic to update departments
    Department.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbDepartmentData => {
        if (!dbDepartmentData) {
            res.status(404).json({ message: 'There is no department with that id!' });
            return;
        }

        res.json(dbDepartmentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/update/jobs
router.put('/jobs/:id', (req, res) => {
    // logic to update jobs
    Job.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbJobData => {
        if (!dbJobData) {
            res.status(404).json({ message: 'There is no department with that id!' });
            return;
        }

        res.json(dbJobData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST /api/update/departments
router.post('/departments', (req, res) => {
    // logic to create new departments
    Department.create({
        name: req.body.name
    })
    .then(dbDepartmentData => res.json(dbDepartmentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/jobs', (req, res) => {
    // logic to create new jobs
    Job.create({
        title: req.body.title,
        department_id: req.body.department_id
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;