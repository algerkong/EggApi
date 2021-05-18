'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'praise'

    const Praise = app.model.define(
        tableName,
        {
            id: {
                type: UUID,
                unique: true,
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true
            }
        }
    )

    Praise.associate = function () {

        //与用户是多对一
        app.model.Praise.belongsTo(app.model.User, {
            foreignKey: 'userId'
        })

        //与动态是多对一
        app.model.Praise.belongsTo(app.model.Dynamic, {
            foreignKey: 'dynamicId'
        })
    };

    return Praise
}