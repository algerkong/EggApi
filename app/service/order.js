const Service = require('egg').Service

class OrderService extends Service {

    //订单添加
    async createOrder(body) {
        await this.app.model.Order.create(body)
    }

    async getOrder(query) {
        if (query.userId !== undefined) {

            return await this.getOrderUser(query);
        } else {
            return await this.getOrderAll(query);
        }
    }

    //获取订单
    async getOrderAll(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let orderList = await this.app.model.Order.findAll({
            offset: (page - 1) * count,
            limit: count,
            include: [

                {
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.ReceiveOrder,
                    include: [

                        {
                            model: this.ctx.model.User
                        },
                        {
                            model: this.ctx.model.Order
                        }
                    ],
                },
                {
                    model: this.ctx.model.Img
                },
            ],
            order: [
                ['created_at', 'DESC']
            ],
        })
        return orderList
    }

    //获取订单
    async getOrderUser(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let orderList = await this.app.model.Order.findAll({
            offset: (page - 1) * count,
            limit: count,
            where: {
                userId: query.userId
            },
            include: [

                {
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.ReceiveOrder
                },
                {
                    model: this.ctx.model.Img
                },
            ],
            order: [
                ['created_at', 'DESC']
            ],
        })
        return orderList
    }

    //修改订单
    async updateOrder(id, body) {
        await this.app.model.Order.update(body, {
            where: {
                id
            }
        })
    }

    //删除订单
    async deleteOrder(id) {
        await this.app.model.Order.destory({
            where: {
                id
            }
        })
    }

    //模糊查询订单
    async findFuzzyOrder(str, body) {
        const Op = this.app.Sequelize.Op
        let page = 1
        let count = 20
        if (body.page !== undefined && body.count !== undefined) {
            page = parseInt(body.page)
            count = parseInt(body.count)
        }
        await this.app.model.Order.findAll({
            offset: (page - 1) * count,
            limit: count,
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${str}%` } },
                    { content: { [Op.like]: `%${str}%` } },
                ]
            },
            include: [
                {
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.ReceiveOrder
                },
                {
                    model: this.ctx.model.Img
                },
            ],
            order: [
                ['created_at', 'DESC']
            ],
        })
    }



    //新增接收订单
    async createReceiveOrder(body) {
        await this.app.model.ReceiveOrder.create(body)
    }


    //获取接收订单
    async getReceiveOrder(body) {
        if (body.userId) {
            let OrderList = await this.getReceiveOrderUser(query);
            return OrderList
        } else {
            let OrderList = await this.getReceiveOrderAll(query);
            return OrderList
        }
    }

    //获取接收订单
    async getReceiveOrderAll(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let orderList = await this.app.model.ReceiveOrder.findAll({
            offset: (page - 1) * count,
            limit: count,
            include: [
                {
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.Order
                }
            ],
            order: [
                ['created_at', 'DESC']
            ],
        })
        return orderList
    }

    //获取订单
    async getReceiveOrderUser(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let orderList = await this.app.model.ReceiveOrder.findAll({
            offset: (page - 1) * count,
            limit: count,
            where: {
                userId: body.userId
            },
            include: [

                {
                    model: this.ctx.model.User
                },
                {
                    model: this.ctx.model.Order
                }
            ],
            order: [
                ['created_at', 'DESC']
            ],
        })
        return orderList
    }

    //修改订单
    // async updateReceiveOrder(id, body) {
    //     await this.app.model.Order.update(body, {
    //         where: {
    //             id
    //         }
    //     })
    // }

    //删除订单
    async deleteReceiveOrder(id) {
        await this.app.model.ReceiveOrder.destory({
            where: {
                id
            }
        })
    }

}


module.exports = OrderService