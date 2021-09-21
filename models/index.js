const Employee = require('./Employee');
const Job = require('./Job');

Employee.belongsTo(Job, {
    foreignKey: 'job_id'
});

Job.hasMany(Employee, {
    foreignKey: 'job_id'
});

module.exports = {
    Employee,
    Job
}