'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        username: STRING(30),
        age: INTEGER,
        password: STRING,
        nickName: STRING,
        gender: INTEGER,
        avatar: STRING
    })
}