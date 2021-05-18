'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'img'

    const Img = app.model.define(
        tableName,
        {
            id: {
                type: UUID,
                unique: true,
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            src: STRING
        }
    )

    Img.associate = function () {

        //与用户是多对一
        app.model.Img.belongsTo(app.model.User, {
            foreignKey: 'userId'
        })

        //与动态是多对一
        app.model.Img.belongsTo(app.model.Dynamic, {
            foreignKey: 'dynamicId'
        })

        //与评论是一对一
        app.model.Img.belongsTo(app.model.Comment, {
            foreignKey: 'commentId'
        })
    };

    return Img
}