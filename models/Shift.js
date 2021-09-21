const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');

class Shift extends Model {}

Shift.init(
    {
        // sets the id column that will be used to connect to the employee
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // designates the shift name eg. Morning, Afternoon, Night, All Day
        shift_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // sets the start time for the shift in question
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        // sets the end time for the shift in question
        end_time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    },
    {
        // pass in the sequelize connection
        sequelize,
        // disable auto creation of createdAt/updatedAt columns
        timestamps: false,
        // does not allow the table to be pluralized
        freezeTableName: true,
        // use underscores instead of camelCasing
        underscored: true,
        // ensure the model name stays lowercase
        modelName: 'shift'
    }
);

module.exports = Shift;