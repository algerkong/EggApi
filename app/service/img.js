const Service = require('egg').Service

class DynamicService extends Service {
    //图片添加
    async createImg(body) {
        await this.app.model.Img.create(body)
    }

    async getImgList(query) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }

        const imgList = await this.app.model.Img.findAll({
            offset: (page - 1) * count,
            limit: count,
            order: [
                ['created_at', 'DESC']
            ],
        })

        return imgList
    }

    //删除图片
    async deleteImg(id) {
        await this.app.model.Img.destory({
            where: {
                id
            }
        })
    }
}


module.exports = DynamicService