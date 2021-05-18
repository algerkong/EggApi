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
            price: FLOAT,
            imgList: STRING
        }
    )

    Order.associate = function () {

        // //与用户是多对一
        // app.model.Dynamic.belongsTo(app.model.User, {
        //     foreignKey: 'releaseId'
        // })

        // //与用户是多对一
        // app.model.Dynamic.belongsTo(app.model.User, {
        //     foreignKey: 'receiveId'
        // })
    }

    return Order
}