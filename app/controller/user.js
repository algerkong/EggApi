'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async create() {
        const { ctx } = this;
        try {
            const body = ctx.request.body

            console.log(body);
            if (await ctx.service.user.findNameUser(body.username)) {
                await ctx.service.user.createUser(body)
                this.ctx.body = {
                    code: 200,
                    msg: '添加成功',
                    body: body
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    msg: '用户名已存在'
                }
            }
        } catch (error) {
            console.log(error);
            this.ctx.body = {
                code: 400,
                msg: '添加失败'
            }
        }
    }

    async index() {
        const { ctx } = this;
        try {
            const userList = await ctx.service.user.getUserList(this.ctx.query)
            ctx.body = {
                code: 200,
                message: '请求成功',
                data: userList
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    async destroy() {
        const { ctx } = this;
        try {
            const id = ctx.params.id
            console.log(await ctx.service.user.deleteUser(id));
            ctx.body = {
                code: 200,
                message: '请求成功'
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    async update() {
        const { ctx } = this;
        try {
            const body = ctx.request.body
            const id = ctx.params.id

            if (await ctx.service.user.findNameUser(body.username)) {
                await ctx.service.user.updateUser(id, body)
                this.ctx.body = {
                    code: 200,
                    msg: '修改成功',
                    body: body
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    msg: '用户名已存在'
                }
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }


}

module.exports = UserController;
