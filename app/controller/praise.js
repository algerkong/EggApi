'use strict';

const Controller = require('egg').Controller;

class PraiseController extends Controller {
    async create() {
        const { ctx } = this;
        const body = ctx.request.body
        try {
            let isPraise = await ctx.service.dynamic.praiseDynamic(body)
            if (isPraise) {
                this.ctx.body = {
                    code: 200,
                    msg: '点赞成功'
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    msg: '已经点过赞了'
                }
            }

        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    async index() {
        try {
            let dynamicId = this.ctx.params.id
            let likeList = await this.ctx.service.dynamic.getPraiseList(dynamicId)
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

    async destroy() {
        try {
            let body = this.ctx.query
            await this.service.dynamic.cancelPraiseDynamic(body)
            this.ctx.body = {
                code: 200,
                msg: '取消点赞成功'
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    async getPraiseList() {
        try {
            let praiseList = await this.service.dynamic.getPraiseList(this.ctx.query)
            this.ctx.body = {
                code: 200,
                msg: '获取成功',
                data: praiseList
            }
        } catch (e) {
            console.log(e);
            this.ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

}

module.exports = PraiseController;
