'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, UUIDV4, TEXT } = app.Sequelize;
    const tableName = 'tag_dynamic'

    const TagDynamic = app.model.define(
        tableName,
        {
            tagId: UUID,
            dynamicId: UUID
        }
    )

    return TagDynamic
}