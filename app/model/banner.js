'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4 } = app.Sequelize;
    const tableName = 'banner'

    const Banner = app.model.define(
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
    return Banner
}