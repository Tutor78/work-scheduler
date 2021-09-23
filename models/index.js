const Employee = require('./Employee');
const Job = require('./Job');
const Shift = require('./Shift');
const Day = require('./Day');
const Department = require('./Department');

Employee.belongsTo(Job, {
    foreignKey: 'job_id'
});

Job.hasMany(Employee, {
    foreignKey: 'job_id'
});

Employee.belongsTo(Shift, {
    foreignKey: 'shift_id'
});

Shift.hasMany(Employee, {
    foreignKey: 'shift_id'
});

Day.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Employee.hasOne(Day, {
    foreignKey: 'employee_id'
});

Job.belongsTo(Department, {
    foreignKey: 'department_id'
});

Department.hasMany(Job, {
    foreignKey: 'department_id'
});

module.exports = {
    Employee,
    Job,
    Shift,
    Day,
    Department
}