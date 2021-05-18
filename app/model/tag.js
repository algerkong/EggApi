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
        // 与标签是多对多
        app.model.Tag.belongsToMany(app.model.Dynamic, {
            through: app.model.TagDynamic,
            foreignKey: 'dynamicId',
            as: 'tag',
            otherKey: 'tagId'
        })

    };

    return Tag
}