'use strict';

const Controller = require('egg').Controller;

class DynamicController extends Controller {
    async create() {
        const { ctx } = this;
        try {
            const body = ctx.request.body
            await ctx.service.dynamic.createDyanmic(body)
            this.ctx.body = {
                code: 200,
                msg: '添加成功',
                body: body
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
        let query = ctx.query
        try {
            const userList = await ctx.service.dynamic.getDynamicList(query)
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

    async getFuzzy() {
        const { ctx } = this;
        try {
            const str = ctx.params.str
            console.log(ctx);
            let dynamicList = await ctx.service.dynamic.findFuzzyDynamic(str)
            this.ctx.body = {
                code: 200,
                msg: '请求成功',
                body: dynamicList
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    async addImg() {
        const body = this.ctx.request.body
        try {
            await this.ctx.service.img.createImg(body)
            this.ctx.body = {
                code: 200,
                msg: '添加成功',
                body: body
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

module.exports = DynamicController;
