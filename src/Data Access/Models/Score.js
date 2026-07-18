const scoreModel = (sequelize, DataTypes) => {
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
            },
            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
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

    Score.associate = (models) => {
        Score.belongsTo(models.Player, {foreignKey: 'playerId'});
        Score.belongsTo(models.Game, {foreignKey: 'gameId'});
    };

    return Score;

};

export default scoreModel;