'use strict';

const Controller = require('egg').Controller;

class ReceiveOrderController extends Controller {
    async index() {
        let body = this.ctx.query
        try {
            let orderList = await this.ctx.service.order.getReceiveOrder(body)
            this.ctx.body = {
                code: 200,
                msg: '请求成功',
                data: orderList
            }

        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    async create() {
        const body = this.ctx.request.body
        try {
            await this.ctx.service.order.createReceiveOrder(body)
            this.ctx.body = {
                code: 200,
                msg: '新建接收订单成功',
                data: body
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '请求失败'
            }
        }
    }

    // async update() {
    //     try {
    //         let id = this.ctx.params.id
    //         let body = this.ctx.request.body
    //         await this.ctx.service.order.updateOrder(id, body)
    //         this.ctx.body = {
    //             code: 200,
    //             msg: '修改订单成功',
    //             body
    //         }

    //     } catch (error) {
    //         console.log(error);
    //         ctx.body = {
    //             code: 400,
    //             msg: '请求失败'
    //         }
    //     }
    // }

    async destory() {
        try {
            let id = this.ctx.params.id
            await this.ctx.service.order.deleteReceiveOrder(id)
            this.ctx.body = {
                code: 200,
                msg: '删除订单成功'
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                msg: '删除订单失败'
            }
        }
    }

    // async fuzzyOrder() {
    //     let str = this.ctx.query.str
    //     try {
    //         let orderList = this.ctx.service.order.findFuzzyOrder(str)
    //         this.ctx.body = {
    //             code: 200,
    //             msg: '请求成功',
    //             data: orderList
    //         }

    //     } catch (error) {
    //         console.log(error);
    //         ctx.body = {
    //             code: 400,
    //             msg: '请求失败'
    //         }
    //     }
    // }
}

module.exports = ReceiveOrderController;
