const gameModel = (sequelize, DataTypes) => {
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

    Game.associate = (models) => {
        Game.hasMany(models.Card, { foreignKey: 'gameId' });
        Game.hasMany(models.Score, { foreignKey: 'gameId' });
    };

    return Game;

};

export default gameModel;