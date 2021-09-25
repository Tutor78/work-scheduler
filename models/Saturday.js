const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');

class Saturday extends Model {}

Saturday.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME
        },
        end_time: {
            type: DataTypes.TIME
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'saturday'
    }
);

module.exports = Saturday;