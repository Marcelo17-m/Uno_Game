import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Game from './Game.js';
import Player from './Player.js';

const Score = sequelize.define(
    'Score',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        playerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Player,
                key: 'id',
            },
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Game,
                key: 'id',
            },
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'scores',
        timestamps: true, //it could change to automatize the CreatedAt and UpdatedAt
        createdAt: 'timestamp',
        updatedAt: false,
    }
);

Score.belongsTo(Player, { foreignKey: 'playerId' });
Score.belongsTo(Game, { foreignKey: 'gameId' });
Player.hasMany(Score, { foreignKey: 'playerId' });
Game.hasMany(Score, { foreignKey: 'gameId' });

export default Score;