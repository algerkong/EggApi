'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
    async create() {
        const { ctx } = this;
        const body = ctx.request.body
        try {
            await ctx.service.tag.createTag(body)


        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                message: '请求失败'
            }
        }
    }

    async index() {
        try {
            let query = this.ctx.query
            let tagList = await this.ctx.service.tag.getTagList(query)
            this.ctx.body = {
                code: 200,
                message: '请求成功',
                data: tagList
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                message: '请求失败'
            }
        }
    }

    async destroy() {
        try {
            let id = this.ctx.params.id
            await this.service.tag.deleteTag(id)
            this.ctx.body = {
                code: 200,
                message: '删除成功'
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 400,
                message: '请求失败'
            }
        }
    }

    async update() {
        const { ctx } = this;
        try {
            const body = ctx.request.body
            const id = ctx.params.id

            if (await ctx.service.tag.getIsTag(body.name)) {
                await ctx.service.tag.updateTag(id, body)
                this.ctx.body = {
                    code: 200,
                    message: '修改成功',
                    body: body
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    message: '标签已经存在'
                }
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                message: '请求失败'
            }
        }
    }
}

module.exports = TagController;
