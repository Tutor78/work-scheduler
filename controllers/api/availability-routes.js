const router = require('express').Router();

const { Employee, Job, Shift, Day, Department } = require('../../models');

// GET /api/availability/jobs
router.get('/jobs', (req, res) => {
    Job.findAll({
        attributes: [
            'title'
        ],
        include: [
            {
                model: Employee,
                attributes: [
                    'email',
                    'first_name',
                    'last_name'
                ],
                include: [
                    {
                        model: Shift,
                        attributes: [
                            'shift_name',
                            'start_name',
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
            }
        ]
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/departments
router.get('/departments', (req, res) => {
    Department.findAll({
        attributes: [
            'name'
        ],
        include: [
            {
                model: Job,
                attributes: [
                    'title'
                ],
                include: {
                    model: Employee,
                    attributes: [
                        'id',
                        'email',
                        'first_name',
                        'last_name'
                    ],
                    include: [
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
                }
            }
        ]
    })
    .then(dbDepartmentData => res.json(dbDepartmentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/availability/days/:id
router.get('/days/:id', (req, res) => {
    Day.findOne({
        where: {
            employee_id: req.params.id
        },
        include: [
            {
                model: Employee,
                attributes: [
                    'id',
                    'email',
                    'first_name',
                    'last_name'
                ],
                include: [
                    {
                        model: Job,
                        attributes: [
                            'title'
                        ],
                        include: [
                            {
                                model: Department,
                                attributes: [
                                    'name'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(dbDayData => res.json(dbDayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/availability/days/:id
router.put('/days/:id', (req, res) => {
    Day.update(req.body, {
        where: {
            employee_id: req.params.id
        }
    })
    .then(dbDayData => {
        if (!dbDayData) {
            res.status(404).json({ message: 'There is no employee with that id!' });
            return;
        }

        res.json(dbDayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;