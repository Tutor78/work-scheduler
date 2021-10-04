const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Job extends Model {}

// define the jobs table
Job.init(
    {
        // sets the id column info
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'department',
                key: 'id'
            }
        }
    },
    {
        // pass in the sequelize connection
        sequelize,
        // disable automatically adding createAt/updatedAt fields
        timestamps: false,
        // does not allow the table to be pluralized
        freezeTableName: true,
        // use underscores instead of camelCasing
        underscored: true,
        // ensure the table name stays lowercase
        modelName: 'job'
    }
);

module.exports = Job;