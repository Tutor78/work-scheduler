const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');

class Day extends Model {}

Day.init(
    {
        // sets the id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // sets a boolean for monday
        monday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        tuesday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        wednesday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        thursday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        friday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        saturday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        sunday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        // sets the employee that owns the available days
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id'
            }
        }
    },
    {
        // passes the sequelize connection
        sequelize,
        // does not auto create createdAt/UpdatedAt columns
        timestamps: false,
        // does not allow the pluralization of the table
        freezeTableName: true,
        // use underscores instead of camelCasing
        underscored: true,
        // ensure the table name stays lowercase
        modelName: 'day'
    }
);

module.exports = Day;