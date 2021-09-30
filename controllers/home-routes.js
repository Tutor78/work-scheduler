const router = require('express').Router();
const { Job } = require('../models');

// gets the landing page which is the login page
router.get('/', (req, res) => {
    Job.findAll({})
        .then(dbJobData => {
            const jobTitleArr = [];

            for (let i = 0; i < dbJobData.length; i++) {
                jobTitleArr.push(dbJobData[i].title);
            }

            const data = {
                jobTitleArr: jobTitleArr,
                login: true
            }

            

            res.render('login', data);
        });
});

router.get('/manager', (req, res) => {
    const manager = true;

    res.render('manager', { manager });
});

router.get('/employee', (req, res) => {
    const employee = true;

    res.render('employee', { employee });
});

module.exports = router;