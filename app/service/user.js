const Service = require('egg').Service

class UserService extends Service {


    //账号添加
    async createUser(body) {
        await this.app.model.User.create(body)
        return true
    }

    //获取账号列表
    async getUserList() {
        const userList = await this.app.model.User.findAll()
        return userList
    }

    async findNameUser(username) {
        const userList = await this.app.model.User.findAll({
            where: {
                username
            }
        })
        if (userList.length > 0) {
            return false
        } else {
            return true
        }
    }

    async findIdUser(id) {
        const user = await this.app.model.User.findOne({
            where: {
                id
            }
        })

        console.log(user, "获取用户信息");
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
            console.log(user, "aaaaaaaaaaaaa");
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