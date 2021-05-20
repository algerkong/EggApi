const Service = require('egg').Service

class UserService extends Service {


    //账号添加
    async createUser(body) {
        await this.app.model.User.create(body)
        return true
    }



    //获取账号列表

    async getUserList(query) {

        console.log(query);
        try {
            if (query.username) {
                return await this.findNameUser(query.username, query)
            } else {
                return await this.getUser(query)
            }
        } catch (e) {
            console.log(e);
            return await this.getUser(query)
        }
    }

    async getUser(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        const userList = await this.app.model.User.findAll({
            offset: (page - 1) * count,
            limit: count
        })
        return userList
    }

    async findNameUser(username, query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        const userList = await this.app.model.User.findAll({
            offset: (page - 1) * count,
            limit: count,
            where: {
                username: username
            }
        })
        return userList
    }

    async findIdUser(id) {
        const user = await this.app.model.User.findOne({
            where: {
                id
            }
        })
        return user.dataValues
    }

    //删除账号
    async deleteUser(id) {
        await this.app.model.User.destroy({
            where: {
                id
            }
        })
        return true
    }

    //修改账号
    async updateUser(id, body) {
        await this.app.model.User.update(body, {
            where: {
                id
            }
        })
        return true
    }

    //登录
    async login(username, password) {
        try {
            const user = await this.app.model.User.findOne({
                where: {
                    username
                }
            })
            if (user) {
                if (password == user.password) {
                    const token = this.app.jwt.sign({
                        username: username,
                        id: user.dataValues.id
                    }, this.app.config.jwt.secret)
                    return { token, user }
                } else {
                    return null
                }
            } else {
                return null
            }
        } catch (error) {
            console.log(error);
            return null
        }
    }
}


module.exports = UserService