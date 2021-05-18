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
        try {
            const userList = await ctx.service.dynamic.getDynamicList()
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
        console.log("aaaaaaaaaaaaaaa");
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

    async giveLike() {
        const { ctx } = this;
        const body = ctx.request.body
        try {
            await ctx.service.dynamic.praiseDynamic(body)
            this.ctx.body = {
                code: 200,
                msg: '点赞成功'
            }

        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }

    }


    async cancelLike() {
        const { ctx } = this;
        const body = ctx.request.body
        try {
            await ctx.service.dynamic.cancelPraiseDynamic(body)
            this.ctx.body = {
                code: 200,
                msg: '取消成功'
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }


    async getLikeList() {
        try {
            let likeList = await this.ctx.service.dynamic.getPraiseList()
            this.ctx.body = {
                code: 200,
                msg: '请求成功',
                data: likeList
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }


}

module.exports = DynamicController;
