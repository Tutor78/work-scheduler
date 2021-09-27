const router = require('express').Router();

// gets the landing page which is the login page
router.get('/', (req, res) => {
    const login = true;

    res.render('login', { login });
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