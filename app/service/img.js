const Service = require('egg').Service

class DynamicService extends Service {
    //图片添加
    async createImg(body) {
        await this.app.model.Img.create(body)
    }

    async getImgList(query, body) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }

        const imgList = await this.app.model.Img.findAndCountAll({
            offset: (page - 1) * count,
            limit: count,
            where: body,
            order: [
                ['created_at', 'DESC']
            ],
        })

        return {
            list: imgList.rows,
            total: imgList.count
        }
    }

    //删除图片
    async deleteImg(id) {
        await this.app.model.Img.destroy({
            where: {
                id
            }
        })
    }
}


module.exports = DynamicService