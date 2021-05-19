module.exports = app => {
    app.beforeStart(async function () {
        // await app.model.sync({ force: true })  //开发使用  会清空表
        await app.model.sync({})
    })
}