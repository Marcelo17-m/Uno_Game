import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Game = sequelize.define(
    'Game',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('waiting', 'active', 'finished'),
            allowNull: false,
        },
        maxPlayers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'games',
        timestamps: true, //it could change to automatize the CreatedAt and UpdatedAt
        createdAt: 'createdAt',
        updatedAt: false,
    }
);

export default Game;