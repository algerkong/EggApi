'use strict';

module.exports = app => {
    const { STRING, INTEGER, FLOAT, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'receive_order'

    const ReceiveOrder = app.model.define(
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

    ReceiveOrder.associate = function () {

        //与用户是多对一
        app.model.ReceiveOrder.belongsTo(app.model.User, {
            foreignKey: 'userId'
        })

        //与订单是一对一
        app.model.ReceiveOrder.belongsTo(app.model.Order, {
            foreignKey: 'orderId'
        })
    }

    return ReceiveOrder
}