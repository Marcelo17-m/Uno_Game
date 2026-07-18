
const playerModel = (sequelize, DataTypes) => {
    const Player = sequelize.define(
        'Player',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
        },
        {
            tableName: 'players',
            timestamps: true, //it could change to automatize the CreatedAt and UpdatedAt
            createdAt: 'createdAt',
            updatedAt: false,
        }
    );

    Player.associate = (models) => {
        Player.hasMany(models.Score, { foreignKey:'playerId'});
    };
    return Player;
};

export default playerModel;