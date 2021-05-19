'use strict';

module.exports = app => {
    const { STRING, INTEGER, FLOAT, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'order'

    const Order = app.model.define(
        tableName,
        {
            id: {
                type: UUID,
                unique: true,
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            title: STRING,
            content: TEXT,
            tag: STRING,
            is: INTEGER,
            status: {
                type: INTEGER,
                defaultValue: 0
            },
            price: FLOAT
        }
    )

    Order.associate = function () {
        //与用户是多对一
        app.model.Order.belongsTo(app.model.User, {
            foreignKey: 'userId'
        })
        //与接收订单是一对一
        app.model.Order.hasOne(app.model.ReceiveOrder, {
            foreignKey: 'orderId'
        })

        //与图片是一对多
        app.model.Order.hasMany(app.model.Img, {
            foreignKey: 'ordeId'
        })
    }

    return Order
}