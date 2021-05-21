'use strict';

const Controller = require('egg').Controller;

class PraiseController extends Controller {
    async create() {
        const { ctx } = this;
        const body = ctx.request.body
        try {
            await ctx.service.comment.createComment(body)
            this.ctx.body = {
                code: 200,
                msg: '添加成功'
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
            let body = this.ctx.query
            let commentList = await this.ctx.service.comment.getCommentList(body)
            this.ctx.body = {
                code: 200,
                msg: '请求成功',
                data: commentList
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
            let id = this.ctx.query.id
            await this.service.comment.deleteComment(id)
            this.ctx.body = {
                code: 200,
                msg: '删除成功'
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

module.exports = PraiseController;
