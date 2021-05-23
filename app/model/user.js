'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4 } = app.Sequelize;
    const tableName = 'user'

    const User = app.model.define(
        tableName,
        {
            id: {
                type: UUID,
                unique: true,
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            username: STRING,
            age: INTEGER,
            password: STRING,
            nickName: STRING,
            gender: INTEGER,
            avatar: STRING
        }
    )

    User.associate = function () {
        //与动态是一对多
        app.model.User.hasMany(app.model.Dynamic, {
            foreignKey: 'userId'
        })

        //与图片是一对多
        app.model.User.hasMany(app.model.Img, {
            foreignKey: 'userId'
        })

        //与评论是一对多
        app.model.User.hasMany(app.model.Comment, {
            foreignKey: 'userId'
        })

        //与点赞是一对多
        app.model.User.hasMany(app.model.Praise, {
            foreignKey: 'userId'
        })

        // 与订单是一对多
        app.model.User.hasMany(app.model.Order, {
            foreignKey: 'userId'
        })

        // 与接收订单是一对多
        app.model.User.hasMany(app.model.ReceiveOrder, {
            foreignKey: 'userId'
        })

    }

    return User
}