const router = require('express').Router();
const { Employee, Job, Shift, Day } = require('../../models');

// GET /api/employees/
router.get('/', (req, res) => {
    // logic to retrieve all employee information
    Employee.findAll({
        attributes: [
            'id',
            'email',
            'first_name',
            'last_name',
            'job_id'
        ],
        include: [
            {
                model: Job,
                attributes: [
                    'title',
                    'department'
                ]
            },
            {
                model: Shift,
                attributes: [
                    'title',
                    'department'
                ]
            },
            {
                model: Day,
                attributes: [
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                    'sunday'
                ]

            }
        ]
    })
    .then(dbEmployeeData => res.json(dbEmployeeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/employees/:id
router.get('/:id', (req, res) => {
    // logic to get informtion about one employee
    Employee.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'email',
            'first_name',
            'last_name',
            'job_id'
        ],
        include: [
            {
                model: Job,
                attributes: [
                    'title',
                    'department'
                ]
            },
            {
                model: Shift,
                attributes: [
                    'shift_name',
                    'start_time',
                    'end_time'  
                ]
            },
            {
                model: Day,
                attributes: [
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                    'sunday'
                ]
            }
        ]
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'There is no employee with that id '});
            return;
        }

        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST /api/employees
router.post('/', (req, res) => {
    // logic to create a new user
    /*
        example json to create user
        {
            "id": 101,
            "email": "email@work.com",
            "password": "supersecurepassword",
            "first_name": "Tammy",
            "last_name": "Reacher",
            "job_id": 1
        }
    */
});

// POST /api/employees/login
router.post('/login', (req, res) => {
    // logic to login a user
});

// POST /api/employess/logout
router.post('/logout', (req, res) => {
    // logic to log a user out
});

// PUT /api/employees/:id
router.put('/:id', (req, res) => {
    // logic to update an employee
});

// DELETE /api/employees/:id
router.delete('/:id', (req, res) => {
    // logic to delete an employee
});

module.exports = router;