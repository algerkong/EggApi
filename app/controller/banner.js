'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
    async create() {
        const { ctx } = this;
        try {
            let body = ctx.request.body
            await this.app.model.Banner.create(body)
            this.ctx.body = {
                code: 200,
                message: '添加成功',
                body: body
            }
        } catch (error) {
            console.log(error);
            this.ctx.body = {
                code: 400,
                message: '请求失败'
            }
        }
    }

    async index() {
        const { ctx } = this;
        try {
            let query = this.ctx.query
            let page = 1
            let count = 20
            if (query.page !== undefined && query.count !== undefined) {
                page = parseInt(query.page)
                count = parseInt(query.count)
            }
            const bannerList = await ctx.model.Banner.findAndCountAll({
                offset: (page - 1) * count,
                limit: count,
                order: [
                    ['created_at', 'DESC']
                ],
            })
            ctx.body = {
                code: 200,
                message: '请求成功',
                data: {
                    list: bannerList.rows,
                    total: bannerList.count
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

    async destroy() {
        const { ctx } = this;
        try {
            const id = ctx.params.id
            await ctx.model.Banner.destroy({
                where: {
                    id
                }
            });
            ctx.body = {
                code: 200,
                message: '删除成功',
                id: id
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

module.exports = BannerController;
