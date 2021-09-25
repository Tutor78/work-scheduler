const Employee = require('./Employee');
const Job = require('./Job');
const Department = require('./Department');
const Shift = require('./Shift');
const Monday = require('./Monday');
const Tuesday = require('./Tuesday');
const Wednesday = require('./Wednesday');
const Thursday = require('./Thursday');
const Friday = require('./Friday');
const Saturday = require('./Saturday');
const Sunday = require('./Sunday');

Employee.belongsTo(Job, {
    foreignKey: 'job_id'
});

Job.hasMany(Employee, {
    foreignKey: 'job_id'
});

Shift.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Employee.hasMany(Shift, {
    foreignKey: 'employee_id'
});

Job.belongsTo(Department, {
    foreignKey: 'department_id'
});

Department.hasMany(Job, {
    foreignKey: 'department_id'
});

Monday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Tuesday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Wednesday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Thursday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Friday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Saturday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Sunday.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

module.exports = {
    Employee,
    Job,
    Shift,
    Department,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}