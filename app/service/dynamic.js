const Service = require('egg').Service

class DynamicService extends Service {


    //动态添加
    async createDyanmic(body) {
        await this.app.model.Dynamic.create(body)
        this.ctx.body = {
            code: 200,
            msg: '添加成功',
            body: body
        }
        return true
    }

    //删除
    async deleteDynamic(id) {
        await this.app.model.Dynamic.destroy({
            where: {
                id
            }
        })
    }

    //动态修改
    async updateDynamic(id, body) {
        await this.app.model.Dynamic.update(body, {
            where: {
                id
            }
        })
    }

    //获取动态列表详情
    async getDynamicList(query) {

        let dynamicList = null

        if (query.str !== undefined) {
            dynamicList = await this.findFuzzyDynamic(query.str, query)
        } else if (query.userId !== undefined) {

            dynamicList = await this.getUserDynamic(query.userId, query)
        } else {
            dynamicList = await this.getList(query)
        }

        return {
            list: dynamicList.rows,
            total: dynamicList.count
        }
    }

    async getList(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        const dynamicList = await this.app.model.Dynamic.findAndCountAll({
            offset: (page - 1) * count,
            limit: count,
            include: [
                {
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.Img,
                    order: [
                        ['created_at', 'DESC']
                    ],
                },
                {
                    model: this.ctx.model.Comment,
                    include: [
                        {
                            model: this.ctx.model.User
                        }
                    ],
                    order: [
                        ['created_at', 'DESC']
                    ],
                },
                {
                    model: this.ctx.model.Tag,
                },
                {
                    model: this.ctx.model.Praise,
                    include: [
                        {
                            model: this.ctx.model.User
                        }
                    ],
                    order: [
                        ['created_at', 'DESC']
                    ],
                }],
            order: [
                ['created_at', 'DESC']
            ],
            distinct: true
        })
        return dynamicList
    }

    //获取用户动态列表
    async getUserDynamic(userId, query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        const dynamicList = await this.app.model.Dynamic.findAndCountAll({
            offset: (page - 1) * count,
            limit: count,
            where: {
                userId: userId
            },
            include: [{
                model: this.ctx.model.User
            },
            {
                model: this.ctx.model.Img
            },
            {
                model: this.ctx.model.Comment,
                include: [
                    {
                        model: this.ctx.model.User
                    }
                ]
            },
            {
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

    //模糊查询动态
    async findFuzzyDynamic(str, query) {
        const Op = this.app.Sequelize.Op

        console.log(query, str);

        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        const dynamicList = await this.app.model.Dynamic.findAndCountAll({
            offset: (page - 1) * count,
            limit: count,
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${str}%` } },
                    { content: { [Op.like]: `%${str}%` } }
                ]
            },
            include: [{
                model: this.ctx.model.User
            },
            {
                model: this.ctx.model.Img
            },
            {
                model: this.ctx.model.Comment,
                include: [
                    {
                        model: this.ctx.model.User
                    }
                ]
            },
            {
                model: this.ctx.model.Praise,
                include: [
                    {
                        model: this.ctx.model.User
                    }
                ]
            }],
            order: [
                ['created_at', 'DESC']
            ]
        })
        return dynamicList
    }

    //点赞
    async praiseDynamic(body) {
        if (await this.getIsPraise(body)) {
            await this.app.model.Praise.create(body)
            return true
        } else {
            return false
        }
    }

    //判断是否点过赞
    async getIsPraise(body) {
        let praise = await this.app.model.Praise.findOne({
            where: {
                userId: body.userId,
                dynamicId: body.dynamicId
            }
        })
        if (praise) {
            return false
        } else {
            return true
        }
    }

    //取消点赞
    async cancelPraiseDynamic(body) {
        await this.app.model.Praise.destroy({
            where: body
        })
        return true
    }

    //获取点赞列表
    async getPraiseList(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let praiseList = await this.app.model.Praise.findAll(
            {
                offset: (page - 1) * count,
                limit: count,
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
    async getDynamicPraiceList(id, query) {

        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let praiseList = await this.app.model.Praise.findAll(
            {
                offset: (page - 1) * count,
                limit: count,
                where: {
                    dynamicId: id
                },
                include: [{
                    model: this.ctx.model.User
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
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let praiseList = await this.app.model.Praise.findAll(
            {
                offset: (page - 1) * count,
                limit: count,
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