const cardModel = (sequelize, DataTypes) => {
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
            },
        },
        {
            tableName: 'cards',
            timestamps: true, //it could change to automatize the CreatedAt and UpdatedAt
            createdAt: 'createdAt',
            updatedAt: false,
        }
    );

    Card.associate = (models) => {
        Card.belongsTo(models.Game, {foreignKey: 'gameId'});
    };

    return Card;
};

export default cardModel;