const Service = require('egg').Service

class DynamicService extends Service {


    //动态添加
    async createDyanmic(body) {
        await this.app.model.Dynamic.create(body)
        return true
    }


    //获取动态列表

    //获取动态列表详情
    async getDynamicList() {
        const dynamicList = await this.app.model.Dynamic.findAll({
            include: [{
                model: this.ctx.model.User
            }, {
                model: this.ctx.model.Comment,
                include: [
                    {
                        model: this.ctx.model.User
                    }
                ]
            }, {
                model: this.ctx.model.Praise,
                include: [
                    {
                        model: this.ctx.model.User
                    }
                ]
            }],
            order: [
                ['created_at', 'DESC']
            ],
            distinct: true
        })
        return dynamicList
    }

    //获取用户动态列表
    async getUserDynamic(id) {
        const dynamicList = await this.app.model.Dynamic.findAll({
            where: {
                userId: id
            },
            include: [{
                model: this.ctx.model.User
            }],
            order: [
                ['created_at', 'DESC']
            ],
            distinct: true
        })
        return dynamicList
    }

    //模糊查询动态
    async findFuzzyDynamic(str) {
        const Op = this.app.Sequelize.Op
        const dynamicList = await this.app.model.Dynamic.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${str}%` } },
                    { md_text: { [Op.like]: `%${str}%` } },
                    { html_text: { [Op.like]: `%${str}%` } },
                ]
            },
        })
        return dynamicList
    }

    //点赞
    async praiseDynamic(body) {
        await this.app.model.Praise.create(body)
        return true
    }

    //取消点赞
    async cancelPraiseDynamic(body) {
        await this.app.model.Praise.destroy({
            where: body
        })
        return true
    }

    //获取点赞列表
    async getPraiseList() {
        let praiseList = await this.app.model.Praise.findAll(
            {
                include: [{
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.Dynamic
                }],
                order: [
                    ['created_at', 'DESC']
                ],
                distinct: true
            }
        )
        return praiseList
    }


    //获取动态点赞列表
    async getDynamicPraiceList(id) {
        let praiseList = await this.app.model.Praise.findAll(
            {
                where: {
                    dynamicId: id
                },
                include: [{
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.Dynamic
                }],
                order: [
                    ['created_at', 'DESC']
                ],
                distinct: true
            }
        )
        return praiseList
    }

    //获取用户点赞动态列表
    async getUserPraiceList(id) {
        let praiseList = await this.app.model.Praise.findAll(
            {
                where: {
                    userId: id
                },
                include: [
                    {
                        model: this.ctx.model.Dynamic
                    }],
                order: [
                    ['created_at', 'DESC']
                ],
                distinct: true
            }
        )
        return praiseList
    }



}


module.exports = DynamicService