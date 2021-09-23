const router = require('express').Router();

const { Employee, Job, Shift, Day, Department } = require('../../models');

// GET /api/departments
router.get('/', (req, res) => {
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
                include: [
                    {
                        model: Employee,
                        attributes: [
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

// GET /api/departments/:id
router.get('/:id', (req, res) => {
    Department.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'name'
        ], 
        include: [
            {
                model: Job,
                attributes: [
                    'title'
                ],
                include: [
                    {
                        model: Employee,
                        attributes: [
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
})

module.exports = router;