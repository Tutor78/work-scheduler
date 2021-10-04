const router = require('express').Router();

const { Employee, Job, Department, Shift } = require('../../models');
const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = require('../../models');

// GET /api/availability/departments
router.get('/departments', (req, res) => {
    // logic to search for employee availability by department
    Department.findAll({
        attributes: [
            'id',
            'name'
        ],
        include: [
            {
                model: Job,
                attributes: [
                    'id',
                    'title'
                ],
                include: [
                    {
                        model: Employee,
                        attributes: [
                            'id',
                            'first_name',
                            'last_name',
                            'email'
                        ],
                        include: [
                            {
                                model: Monday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Tuesday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Wednesday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Thursday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Friday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Saturday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Sunday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Shift
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbDepartmentData => res.json(dbDepartmentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/job
router.get('/jobs', (req, res) => {
    // logic to search for availability by job
    Job.findAll({
        attributes: [
            'id',
            'title'
        ],
        include: [
            {
                model: Department,
                attributes: [
                    'id',
                    'name'
                ]
            },
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Monday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    },
                    {
                        model: Tuesday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    },
                    {
                        model: Wednesday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    },
                    {
                        model: Thursday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    },
                    {
                        model: Friday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    },
                    {
                        model: Saturday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    },
                    {
                        model: Sunday,
                        attributes: [
                            'is_available',
                            'start_time',
                            'end_time'
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availabilitiy/departments/:id
router.get('/departments/:id', (req, res) => {
    // logic to search for employee availability by one department
    Department.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name'
        ],
        include: [
            {
                model: Job,
                attributes: [
                    'id',
                    'title'
                ],
                include: [
                    {
                        model: Employee,
                        attributes: [
                            'id',
                            'first_name',
                            'last_name',
                            'email'
                        ],
                        include: [
                            {
                                model: Monday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Tuesday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Wednesday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Thursday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Friday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Saturday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            },
                            {
                                model: Sunday,
                                attributes: [
                                    'is_available',
                                    'start_time',
                                    'end_time'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]

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

// GET /api/availability/jobs/:name
router.get('/jobs/:name', (req, res) => {
    Job.findOne({
        where: {
            title: req.params.name
        },
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ]
            }
        ]
    })
    .then(dbJobData => {
        if (!dbJobData) {
            res.status(404).json({ message: 'There is no job with that name!' });
            return;
        }

        res.json(dbJobData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// GET /api/availability/monday
router.get('/monday', (req, res) => {
    // logic to search for monday's availability
    Monday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbMondayData => res.json(dbMondayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/tuesday
router.get('/tuesday', (req, res) => {
    // logic to search for tuesday's availability
    Tuesday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbTuesdayData => res.json(dbTuesdayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/wednesday
router.get('/wednesday', (req, res) => {
    // logic to search for wednesday's availability
    Wednesday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbWednesdayData => res.json(dbWednesdayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/thursday
router.get('/thursday', (req, res) => {
    // logic to search for thursday's availability
    Thursday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbThursdayData => res.json(dbThursdayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/friday
router.get('/friday', (req, res) => {
    // logic to search for friday's availability
    Friday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbFridayData => res.json(dbFridayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/saturday
router.get('/saturday', (req, res) => {
    // logic to search for saturday's availability
    Saturday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbSaturdayData => res.json(dbSaturdayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/sunday
router.get('/sunday', (req, res) => {
    // logic to search for sunday's availability
    Sunday.findAll({
        attributes: [
            'is_available',
            'start_time',
            'end_time'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'id',
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'id',
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbSundayData => res.json(dbSundayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUt /api/availability/monday/:id
router.put('/monday/:id', (req, res) => {
    // logic to update an employee monday availability
    /*
        example for req.body for updating
        {
            "is_available:" 1,
            "start_time": 14:00:00, (HH:MM:SS)
            "end_time": 20:00:00 (HH:MM:SS)
        }
        All times must be in utc format
    */
    Monday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbMondayData => {
        if (!dbMondayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbMondayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/tuesday/:id
router.put('/tuesday/:id', (req, res) => {
    // logic to update an employee's tuesday availability
    Tuesday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbTuesdayData => {
        if (!dbTuesdayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbTuesdayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/wednesday/:id
router.put('/wednesday/:id', (req, res) => {
    // logic to update an employee's wednesday availability
    Wednesday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbWednesdayData => {
        if (!dbWednesdayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbWednesdayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/thursday/:id
router.put('/thursday/:id', (req, res) => {
    // logic to update an employee's thursday availability
    Thursday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbThursdayData => {
        if (!dbThursdayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbThursdayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/friday/:id
router.put('/friday/:id', (req, res) => {
    // logic to update an employee's friday availability
    Friday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbFridayData => {
        if (!dbFridayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbFridayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/saturday/:id
router.put('/saturday/:id', (req, res) => {
    // logic to update an employee's saturday availability
    Saturday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbSaturdayData => {
        if (!dbSaturdayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbSaturdayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/sunday/:id
router.put('/sunday/:id', (req, res) => {
    // logic to update an employee's sunday availability
    Sunday.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbSundayData => {
        if (!dbSundayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbSundayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// -- All Routes Pertaining to the Creation and Managing of shifts below --
router.get('/shifts', (req, res) => {
    Shift.findAll({
        where: {
            employee_id: req.session.user_id
        }
    })
        .then(dbShiftData => res.json(dbShiftData))
})

// GET /api/availability/shifts/:id
router.get('/shifts/:id', (req, res) => {
    Shift.findAll({
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbShiftData => res.json(dbShiftData))
}) ;



// POST /api/availability/shifts
router.post('/shifts', (req, res) => {
    // logic to create new shifts fr employees
    /*
        example for creating a shift: 
        {
            "shift_date": 2021-10-08 (YYYY-MM-DD),
            "start_time": "10:00:00" (HH:MM:SS),
            "end_time": "16:00:00" (HH:MM:SS),
            "employee_id": 101
        }
        Everything must be in utc format
    */
    Shift.create({
        shift_date: req.body.shift_date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        employee_id: req.body.employee_id
    })
    .then(dbShiftData => res.json(dbShiftData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/shifts/:id
router.put('/shifts/:id', (req, res) => {
    // logic to update a shift
    Shift.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbShiftData => {
        if (!dbShiftData) {
            res.status(404).json({ message: 'There is no shift with that id!' });
            return;
        }

        res.json(dbShiftData);
    })
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    })
});

// DELETE /api/availability/shift/:id
router.delete('/shifts/:id', (req, res) => {
    // logic to delete a shift
    Shift.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbShiftData => {
        if (!dbShiftData) {
            res.status(404).json({ message: 'There is no shift with that id!' });
            return;
        }

        res.json(dbShiftData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;