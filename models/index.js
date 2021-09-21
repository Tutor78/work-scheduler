const Employee = require('./Employee');
const Job = require('./Job');

Employee.belongsTo(Job);

Job.hasMany(Employee);

module.exports = {
    Employee,
    Job
}