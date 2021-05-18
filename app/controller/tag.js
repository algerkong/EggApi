'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
    async create() {
        const { ctx } = this;
        const body = ctx.request.body
        try {
            let isTag = await ctx.service.tag.createTag(body)
            if (isTag) {
                this.ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    msg: '标签已经存在'
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
            let tagList = await this.ctx.service.tag.getTagList()
            this.ctx.body = {
                code: 200,
                msg: '请求成功',
                data: tagList
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
            let id = this.ctx.params.id
            await this.service.tag.deleteTag(id)
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

    async update() {
        const { ctx } = this;
        try {
            const body = ctx.request.body
            const id = ctx.params.id

            if (await ctx.service.tag.getIsTag(body.name)) {
                await ctx.service.tag.updateTag(id, body)
                this.ctx.body = {
                    code: 200,
                    msg: '修改成功',
                    body: body
                }
            } else {
                this.ctx.body = {
                    code: 201,
                    msg: '标签已经存在'
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

module.exports = TagController;
