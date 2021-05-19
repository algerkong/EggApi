'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'tag'

    const Tag = app.model.define(
        tableName,
        {
            id: {
                type: UUID,
                unique: true,
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            name: STRING
        }
    )

    Tag.associate = function () {
        //与动态是一对多
        app.model.Tag.hasMany(app.model.Dynamic, {
            foreignKey: 'tagId'
        })
    };

    return Tag
}