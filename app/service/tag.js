const Service = require('egg').Service

class TagService extends Service {


    //标签添加
    async createTag(body) {
        if (await this.getIsTag(body.name)) {
            this.ctx.body = {
                code: 201,
                message: '标签已经存在'
            }
            return false

        } else {
            await this.app.model.Tag.create(body)
            this.ctx.body = {
                code: 200,
                message: '添加成功'
            }
            return true
        }


    }


    async getIsTag(name) {
        let isTag = await this.app.model.Tag.findOne({
            where: {
                name
            }
        })

        return isTag
    }

    async getTagList(query) {
        const Op = this.app.Sequelize.Op

        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }

        if (query.str !== undefined) {

            console.log(query, "1111111");
            let tagList = await this.app.model.Tag.findAll({
                offset: (page - 1) * count,
                limit: count,
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${query.str}%` } }
                    ]
                },
                include: [
                    {
                        model: this.ctx.model.Dynamic,
                        order: [
                            ['created_at', 'DESC']
                        ],
                    },
                ],
                order: [
                    ['created_at', 'DESC']
                ],
            });

            return {
                list: tagList,
                total: await this.getTagTotal(query.str)
            }
        }
        let tagList = await this.app.model.Tag.findAll({
            offset: (page - 1) * count,
            limit: count,
            include: [
                {
                    model: this.ctx.model.Dynamic
                },
            ],
            order: [
                ['created_at', 'DESC']
            ],
        });
        return {
            list: tagList,
            total: await this.getTagTotal()
        }

    }

    async getTagTotal(str) {
        const Op = this.app.Sequelize.Op
        if (str !== undefined) {
            return await this.app.model.Tag.count({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${str}%` } },
                    ]
                },
                order: [
                    ['created_at', 'DESC']
                ],
            })
        }
        return await this.app.model.Tag.count()

    }

    async deleteTag(id) {
        await this.app.model.Tag.destroy({
            where: {
                id
            }
        })
        return true
    }


    async updateTag(id, body) {
        await this.app.model.Tag.update(body, {
            where: {
                id
            }
        })
        return true
    }


}


module.exports = TagService