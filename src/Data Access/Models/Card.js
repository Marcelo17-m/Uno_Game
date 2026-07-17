import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Game from './Game.js';

const Card = sequelize.define(
    'Card',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Game,
                key: 'id',
            },
        },
    },
    {
        tableName: 'cards',
        timestamps: true, //it could change to automatize the CreatedAt and UpdatedAt
        createdAt: 'createdAt',
        updatedAt: false,
    }
);

Card.belongsTo(Game, { foreignKey: 'gameId' });
Game.hasMany(Card, { foreignKey: 'gameId' });

export default Card;