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
            releaseId: UUID,
            receiveId: UUID,
            is: INTEGER,

            status: {
                type: INTEGER,
                defaultValue: 0
            },
            price: FLOAT,
            imgList: STRING
        }
    )


    return Order
}