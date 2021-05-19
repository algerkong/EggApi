const Service = require('egg').Service

class OrderService extends Service {

    //订单添加
    async createOrder(body) {
        await this.app.model.Order.create(body)
    }

    async getOrder(body) {
        if (body.userId) {

            console.log("请求1", body);

            let OrderList = await this.getOrderUser(body);
            return OrderList
        } else {
            console.log("请求2");

            let OrderList = await this.getOrderAll();
            return OrderList
        }
    }

    //获取订单
    async getOrderAll(body) {
        console.log(body, "aaaaaaaaaaaaaa");
        let offset = body ? parseInt(body.offset) : 0
        let limit = body ? parseInt(body.limit) : 20
        let orderList = await this.app.model.Order.findAll({
            offset, limit,
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

    //获取订单
    async getOrderUser(body) {
        let offset = body.offset ? parseInt(body.offset) : 0
        let limit = body.limit ? parseInt(body.limit) : 20
        let orderList = await this.app.model.Order.findAll({
            offset, limit,
            where: {
                userId: body.userId
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
        let offset = body.offset ? parseInt(body.offset) : 0
        let limit = body.limit ? parseInt(body.limit) : 20
        await this.app.model.Order.findAll({
            offset, limit,
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
        await this.app.model.Order.create(body)
    }

    async getReceiveOrder(body) {
        if (body.userId) {

            console.log("请求1", body);

            let OrderList = await this.getOrderUser(body);
            return OrderList
        } else {
            console.log("请求2");

            let OrderList = await this.getOrderAll();
            return OrderList
        }
    }

    //获取订单
    async getReceiveOrderAll(body) {
        console.log(body, "aaaaaaaaaaaaaa");
        let offset = body ? parseInt(body.offset) : 0
        let limit = body ? parseInt(body.limit) : 20
        let orderList = await this.app.model.Order.findAll({
            offset, limit,
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

    //获取订单
    async getReceiveOrderUser(body) {
        let offset = body.offset ? parseInt(body.offset) : 0
        let limit = body.limit ? parseInt(body.limit) : 20
        let orderList = await this.app.model.Order.findAll({
            offset, limit,
            where: {
                userId: body.userId
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
    async updateReceiveOrder(id, body) {
        await this.app.model.Order.update(body, {
            where: {
                id
            }
        })
    }

    //删除订单
    async deleteReceiveOrder(id) {
        await this.app.model.Order.destory({
            where: {
                id
            }
        })
    }

}


module.exports = OrderService