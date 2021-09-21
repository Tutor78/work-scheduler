const{ DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');

class Employee extends Model {}

// defines the employee table
Employee.init(
    {
        // sets the id column info
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        // sets the email column info
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // sets the password column info
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        // sets the first name column information
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // sets the last name column
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        job_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'job',
                key: 'id'
            }
        }
    },
    {
        // pass in the sequelize connection
        sequelize,
        // disable automatically adding created at/updated at fields
        timestamps: false,
        // does not allowthe table to be pluralized
        freezeTableName: true,
        // use underscores instead of camelCasing
        underscored: true,
        // ensure the table name stays lowercase
        modelName: 'employee'
    }
);

module.exports = Employee;