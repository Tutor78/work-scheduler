const router = require('express').Router();

const { Employee, Job, Shift, Day, Department } = require('../../models');

// GET /api/jobs
router.get('/', (req, res) => {
    Job.findAll({
        attributes: [
            'title'
        ],
        include: [
            {
                model: Department,
                attributes: [
                    'name'
                ]
            },
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
    })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;