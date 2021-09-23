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
            "job_id": 1,
            "shift_id": 1
        }
    */
    Employee.create({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        job_id: req.body.job_id,
        shift_id: req.body.shift_id
    })
    .then(dbEmployeeData => {
        req.session.save(() => {
            req.session.user_id = dbEmployeeData.id;
            req.session.email = dbEmployeeData.email;
            req.session.loggedIn = true;

            res.json(dbEmployeeData);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST /api/employees/login
router.post('/login', (req, res) => {
    // logic to login a user
    Employee.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbEmployeeData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect Password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbEmployeeData.id;
            req.session.email = dbEmployeeData.email;
            req.session.loggedIn = true;

            res.json({ user: dbEmployeeData, message: 'You are now logged in!' });            
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST /api/employess/logout
router.post('/logout', (req, res) => {
    // logic to log a user out
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

// PUT /api/employees/:id
router.put('/:id', (req, res) => {
    // logic to update an employee
    Employee.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'There is no user with that id! '});
            return;
        }

        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DELETE /api/employees/:id
router.delete('/:id', (req, res) => {
    // logic to delete an employee
    Employee.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;