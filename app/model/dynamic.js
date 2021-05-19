'use strict';

const Tag = require('./tag')

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'dynamic'

    const Dynamic = app.model.define(
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
            md_text: TEXT,
            html_text: TEXT,
            status: {
                type: INTEGER,
                defaultValue: 0
            },
            type: {
                type: INTEGER,
                defaultValue: 0
            },
        }
    )

    Dynamic.associate = function () {

        //与用户是多对一
        app.model.Dynamic.belongsTo(app.model.User, {
            foreignKey: 'userId'
        })

        //与标签是多对一
        app.model.Dynamic.belongsTo(app.model.Tag, {
            foreignKey: 'tagId',
        })

        //与评论是一对多
        app.model.Dynamic.hasMany(app.model.Comment, {
            foreignKey: 'dynamicId'
        })

        //与图片是一对多
        app.model.Dynamic.hasMany(app.model.Img, {
            foreignKey: 'dynamicId'
        })

        //与点赞是一对多
        app.model.Dynamic.hasMany(app.model.Praise, {
            foreignKey: 'dynamicId'
        })
    };

    return Dynamic
}